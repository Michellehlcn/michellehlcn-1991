---
layout: post
title: REST vs SOAP vs GRAPHQL API
categories: [Blog]
tags: [python, xml, graphQL, RestfulAPI, SOAP, shopifyAPI]
---

This post is more about all the architectures based on my own experience. TLDR: The winner at this stage is GraphQL ,well but there is much more to dive into the topic if you read through the post.

## Background

In modern software development, there are two very important concepts: the client-server model and APIs. Client-server is a structure where by the server( or a provider) and client( or a requester) communicates and sends information or perform actions according to what client does. API or Application Programming Interface is a set of defined rules that show instruction how applications can communicate to each others. 

Taking in the timeline order, SOAP had been released in 1999, following by REST in 2000, and GraphQL in 2015. Today, the most popular ways to implement APIs are REST and GraphQL, it can be seen a large migration from REST to GraphQL architecture.

## SOAP (Simple Object Access Protocol)

SOAP is an XML based protocol, is designed to work with any protocol that supports the transmission of messages over the internet, including HTTP, SMTP and FTP. SOAP supports several security standards, it is a better choice for developing an API when you need to transmit sensitive data, complex structures or need a reliable and standardised protocol. 

However, SOAP can be complex to implement and require specialised expertise. The messages can be large and require a significant processing resources, higher bandwidth. SOAP now can be found in some legacy system, financial application such as gateway or trading platforms.

SML stands for Extensible Markup Language. Here is the sample of request message from SOAP API

A SOAP message is composed of:

- An envelop tag that begins and ends every message
- A body containing the request or response
- A header if a message must determine a any specifics or extra requirements
- A fault informing of any errors in processing

```xml
<soapenv:Envelope
	xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'
	xmlns:xsd='http://www.w3.org/2001/XMLSchema'
	xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/'
	xmlns:urn='urn:Magento'>
	<soapenv:Header/>
	<soapenv:Body>
		<login soapenv:encodingStyle='http://schemas.xmlsoap.org/soap/encoding/'>
			<username xsi:type='xsd:string'>{{username}}</username>
			<apiKey xsi:type='xsd:string'>{{apikey}}</apiKey>
		</login>
	</soapenv:Body>
</soapenv:Envelope>
```
From my experience, when I have to deal with SOAP protocol, I can use the DOMParser API to parse the response into an XML document object, and then use DOM traversal method to navigate the document and extract the values.

Another trick is converting entire XML format to JSON via JSON parse and extracting the value element by complex single nodes, multiple nodes, list, array, to the JSON standard. From the JSON format, you can navigate the value by key items.

There are few more tools to convert, here is an example https://codebeautify.org/xmltojson. Here is the sample of server's response in SOAP API.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope
	xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
	xmlns:ns1="urn:Magento"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
	<SOAP-ENV:Body>
		<ns1:loginResponse>
			<loginReturn xsi:type="xsd:string">xxxx</loginReturn>
		</ns1:loginResponse>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
Here is the sample code for converting  the SOAP envelope response to JSON.

```python
def get_content(d): #dict {}
    if '@xsi:type' in d.keys():
        if d['@xsi:type'] == "ns2:Map" or d['@xsi:type'] == "ns2: Map": 
            if 'item' in d.keys():
                if type(d["item"]) is list: # []
                    list_item = []
                    for i_ in d["item"]:
                        value = get_content(i_)
                        list_item.append(value)
                    return list_item
                elif type(d["item"]) is dict: # {}
                    value =get_content(d["item"])
                    return value
            elif '@xsi:nil' in d.keys():
                return "-"
            elif 'key' in d.keys():
                key =""
                value=""

                # processing key
                if type(d["key"]) is list:
                    key =[]
                    for i in d["key"]:
                        value = get_content(i)
                        key.append(value)
                elif type(d["key"]) is dict:
                    key = get_content(d["key"])
                
                #processing value
                if type(d["value"]) is list:
                    value = []
                    for j in d["value"]:
                        value = get_content(j)
                        value.append(value)
                elif type(d["value"]) is dict:
                    value = get_content(d["value"])
                
                return {key : value}
            else:
                return "-"
          
        elif d["@xsi:type"] == "xsd:string" or d["@xsi:type"] == "xsd: string":
            try:
                value =  d["#text"]
                return value
            except Exception as error:
                return "-"
        elif d["@xsi:type"] == "xsd:float":
            try:
                value = d["#text"]
                return value
            except Exception as error:
                return "-"
        elif d["@xsi:type"] == "xsd:int":
            try:
                value = d["#text"]
                return value
            except Exception as error:
                return "-"
        elif d["@xsi:type"] == "SOAP-ENC:Array" or d["@xsi:type"] == "SOAP-ENC: Array" :
            if d['@SOAP-ENC:arrayType'] ==  'xsd:ur-type[0]' :
                return "-"
            elif 'item' in d.keys():
               
                try :
                    if type(d["item"]) is list:
                        _group = []
                        for _ in d["item"]:
                            value_ = get_content(_)
                            _group.append(value_)
                            if value_ is None:
                                print("value ERROR!!!!" +str(_))

                        return _group
                    if type(d["item"]) is dict:
                        value = get_content(d["item"])
                        if value is None:
                            print("value dict ERROR!!!!" +str(d["item"]))
                        return value
                except Exception as error:
                    print("value item array ERROR!!!!" + str(error) +str(d))
                    return "-"
            elif 'key' in d.keys():
                key =""
                value=""

                # processing key
                if type(d["key"]) is list:
                    key =[]
                    for i in d["key"]:
                        value = get_content(i)
                        key.append(value)
                elif type(d["key"]) is dict:
                    key = get_content(d["key"])
                
                #processing value
                if type(d["value"]) is list:
                    value = []
                    for j in d["value"]:
                        value = get_content(j)
                        value.append(value)
                elif type(d["value"]) is dict:
                    value = get_content(d["value"])
                
                return {key : value}
                
            else:
                print("Invalid value" + str(d))
                return "-"
    else:  #'@xsi:type': 'SOAP-ENC:Array',
        if '@xsi:nil' in d.keys():
            return "-"
        elif 'key' in d.keys():
            key =""
            value=""

            # processing key
            if type(d["key"]) is list:
                key =[]
                for i in d["key"]:
                    value = get_content(i)
                    key.append(value)
            elif type(d["key"]) is dict:
                key = get_content(d["key"])
            
            #processing value
            if type(d["value"]) is list:
                value = []
                for j in d["value"]:
                    value = get_content(j)
                    value.append(value)
            elif type(d["value"]) is dict:
                value = get_content(d["value"])
            
            return {key : value}
```
In general, I am not really a big fan of SOAP because its heavy overhead and it is getting errors when a single node had not been tagged or contained a value.

## REST (Representational State Transfer)

RESTful APIs employs HTTP requests for data access. These data types CRUD operations - GET, PUT, POST, DELETE, or PATCH - refer to the reading, updating, creating, deleting, of resources related actions. The key difference between SOAP and REST is SOAP uses service interfaces to expose the functionality while REST uses Uniform Service Locator to access the components. Rest is stateless while SOAP is stateful. It means for example, whenever a user sends a request to access a resource it needs to send the token in the header so the server can identify the user, in this case, authentication does not depend on the server so there is no such condition like above. SOAP requires more bandwidth for its usage.

For me, REST APIs are relatively simple and easy to learn compared to other APIs, however, the lack of strict standard for REST APIS and vulnerability to security attacks can raise an inconsistencies and security concerns in implementation. Here is the sample to call GET data from shopify store.

```python
import requests

url = "https://store.myshopify.com/admin/api/2023-07/products.json"

querystring = {"vendor":"vendor","limit":"250","status":"active","id":"123"}

payload = ""
headers = {
    "User-Agent": "insomnia/8.6.1",
    "X-Shopify-Access-Token": "tokenxxx"
}

response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

print(response.text)
```

## GraphQL

While SOAP is a protocol, REST and GraphQL are architectural design patterns for API. GraphQL was developed by Meta (Facebook) in 2012, first released in 2015. You can refer to the chatbot messenger which I developed years ago. GraphQL APIs are schema-driven, which is a description of all the queries you can possibly make in a GraphQL API and all the types that they return. GraphQL APIs allow clients to fetch only the data they need, reducing over-fetching and improving performance.

However, it can be more complex to set up and work with compared to REST APIs. It is well-suited for building applications with complex data requirements and where efficient data fetching is important.

## Summary

Wrapping up, it makes sense to try a few small cases with a particular style, to see if it fits your usage case. GraphQL is a big step forward in terms of data fetching, together with Graph ecosystem, few more big companies like Shopify had been shifting the architecture, migrating to GraphQL from REST API.

## References

(1) Altexsoft, Comparing API Architectural Styles: SOAP vs REST vs GraphQL vs RPC. https://www.altexsoft.com/blog/soap-vs-rest-vs-graphql-vs-rpc/

(2) Freecodecamp, Different Types of APIs – SOAP vs REST vs GraphQL. https://www.freecodecamp.org/news/rest-vs-graphql-apis/

(3) Sagardhiman, SOAP vs. REST vs. GraphQL: Difference Between Web API Services. https://javascript.plainenglish.io/soap-vs-rest-vs-graphql-difference-between-web-api-services-461eee5d1ad7