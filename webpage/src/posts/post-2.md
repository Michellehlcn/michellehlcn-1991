---
layout: post
title: Facebook Messenger Bot
categories: [Blog]
tags: [graphQL, meta, facebook Messenger, javascript, glitch, devops]
---

Yup. Another bot 🤖 was made. This time it was for my mom’s Facebook page crochet shop. In this post, I will cover the basic messenger automation, GraphQL and how to deploy to one of free tier hosts such as Glitch, Vercel or AWS ( remembered Heroku at this stage free dyno had been scraped)

## Facebook messenger API and message template

Basically, in any media such as WhatsApp, Teams, Twitter or Discord, you will find easily the official Document how to … in term of creating interaction between the users and the clients. The Facebook Messenger especially implemented on Pages recently has been updated significantly, they also have a few highlight features that shoppers can directly order or make purchases on the platform.

The users then are able to view the detailed analytical report collected from clients movements. The automation messenger can give the suggested replies to the users and the tools are such astonishingly simple and easy enough that my mom can play around and set up the simple messages. Give her a shout! 👏

To start a bot, you will need a business account which does have a basic business settings for example address, image, domain, policy, an advanced access to page messaging (this will need to make a request to Facebook. Please wait around 1-2 days to get it approved, hint: some Facebook folk will send you a message and test the bot).

1. Facebook Page: A Facebook Page will be used as the identity of your Messenger experience. To create a new Page, visit https://www.facebook.com/pages/create
2. Facebook Developer Account: Your developer account is required to create new apps, which are the core of any Facebook integration.
3. Facebook App: The Facebook app contains the settings for your Messenger experience, including access tokens.

Next, setting up a mocking host by ngrok service or https endpoint, please see this link https://ngrok.com. Noted that once the deployment stage has been completed, the webhook callback url will be replaced by official domain. To call the host at port 3000

```
./ngrok http 3000
```

Then, next step is setting the Verify webhook callback for Facebook, see the reference at https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup.

Now, you’re ready to test the message. See reference at https://developers.facebook.com/docs/messenger-platform/send-messages

All messages are sent by submitting a POST request to the Send API with your page access token appended to the URL query string:

```
https://graph.facebook.com/
v15.0
/me/messages?access_token=<PAGE_ACCESS_TOKEN>
```

The body of the HTTP request is sent in JSON format and requires three properties:

- messaging_type: Identifies the purpose of the message send.
- recipient: PSID – Identifies the intended recipient of the message.
- message: Defines the message to be sent.

Here’s a simple example of the body of a request to send a text message:

```json
"messaging_type": "<MESSAGING_TYPE>",
"recipient":{
  "id":"<PSID>"
},
"message":{
  "text":"hello, world!"
}
```
Message types are currently supported in:

- Button
- Generic template
- Private reply
- Quick reply
- Persistent menu
- Recurring notifications

Message webhook event can come in two types “message” (text, template) or “postback” (button)


## Limits on Facebook messenger

At the moment, Facebook doesn’t support audio or list template. The number of buttons limits at 3. Generic template, including carousel type can send at max 10 components in one message, the image size is fixable at 1.91:1, therefore, once image was sent from url, most part was cut off and quite tiny if it’s viewed from mobile version, it can’t be referenced from Facebook url. 

Instead, the media template can support the Facebook url, however, there is only one image per message attached. If you need to use the media template and send multiple messages at the same time, please run the request in a loop 🔁. There’s no form or cards available. Other than that Facebook has their own e-commerce shop with Facebook payment gateway.

## Deploy the bot on glitch/vercel/Heroku/aws

There are a few free hosting services that can be counted such as Heroku, glitch or vercel. If you are on a budget and create the app as a hobby, these services should not be ignored. Reference for app deployed to vercel https://www.marclittlemore.com/serverless-telegram-chatbot-vercel/

Vercel supports quite generous on static website or frontend frame work such as Nextjs, ReactJS, however, when it comes to backend site such as Nodejs, you only have an option to run it on serverless with modification by adding file vercel.json. They support continuous Continuous integration (CI) and continuous delivery (CD), also known as CI/CD.

Glitch is simple, to deploy the app, create new project and link your GitHub repository. It doesn’t support CI/CD neither external services had worked, so once there’s another improvement you need to redeploy by creating a new project. However, 1000 hours a month is quite fabulous compared to this drawback.

Heroku is quite popular and it is getting a lot of attentions recent years. Hence, they start to stop providing free dyno which is free tier hosting, the psql database is staying at the small expenses per month. Well, the bot doesn’t need database at this stage so you can skip this option.

AWS is free on 750 hours on EC2 as long as you don’t use any extra services such as DynamoDB or S3, you won’t be charged. However, they will hold your credit card number upfront.

Here is my GitHub repo. Please feel free to add issues or pull a request if you have any comments on the bot. Hope you like this post.

## References

https://www.marclittlemore.com/serverless-telegram-chatbot-vercel/

https://hackmd.io/@coderschool/messenger-lab-1

https://andrewlock.net/creating-my-first-github-app-with-probot-part-3-deploying-to-glitch/