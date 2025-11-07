---
layout: post
title: Googlesheets Regex Formulas and examples
categories: [Blog]
tags: [regex, googlesheet]
---

The Sheets have been getting tremendous attentions from professional and amateur users (if needless to mention Microsoft365 who joined later in the game). They are online or cloud application, meaning you can get access from every devices or everywhere. However, Google Sheets also can be used as a powerful scrapper which allows you to query the latest or specific version of stored data using provided API. Data can be parsing and optionally converting into structure which help users monitor them as an interactive sheet.

There are few similarities between Google Sheets and Excel, they do provide the identical tools such as Vlookup, Index, ArrayFormula and in another side, as a discrete service, there are also extra features for example Googlefinance, Query and Regex. Regex (RE2) this function which is one of the most common formula in Google Sheets would be helpful in modifying, extracting, cleaning data from file .CSV and so on. Below I’ll dive right into how to replication and tricks to solve problems.

he example demonstrates the fundamental replication, perhaps to master these I might say trying to practice on them instead of using the alternatives to compensate like Find(), Mid(), Left(). The challenging part of themselves is the regular expression which you can get a reference from Google Support.

My takeaways are if you do any sort of spreadsheet work, you’ll find these functions incredibly useful. I know the regular expressions can be intimidating, it’ll be feasible till you catch their patterns. Also, they appears explicitly just as another programming language, so if you are good at any scripting, Java, Python they might not be a real hurdle for you.

Let’s have a look at their structures. In Google Sheets, Regex performs exactly what they say:

- REGEXEXTRACT
- REGEXREPLACE
- REGEXMATCH

## REGEXEXTRACT

```
Syntax
=REGEXEXTRACT(“text”, regular_expression)

Example: C1= Doglovers are good 2021
```

(i) Extract first single word:
-Formula: =regexextract(C,”………”)
-Result: Doglovers

Or Formula: =regexextract(C,”Dog……”)
Note: . = the period represents any character.

(ii) Extract ending word:
-Formula: =regexextract(C,”….\z”)
-Result: 2021
Note:

(iii) Extract single digit
-Formula: =regexextract(C,”(\d)”)
-Result: 2

(iv)Extract whole number
-Formula: =regexextract(C,”(\d+)”)
-Result: 2021

(v) Extract first character
-Formula: =regexextract(C,”(\w)”)
-Result: D

(vi) Extract first word
-Formula: =regexextract(C,”(\w+)”)
-Result: Doglovers

(vii) Split prefix and a number followed by
-Formula: =regexextract(C,”(\w*)\s(\d+)”)
-Result: Good 2021 (in two columns)

(viii) Extract word with a partial match
-Formula: =regexextract(C,”go\w+”)
-Result: good

(ix) Extract whole word not in case sensitives
-Formula: =regexextract(C,”([A-Za-z]+)”)
-Result: Doglovers

(x) Extract any whole number in text
-Formula: =regexextract(C,”[0-9]+”)
-Result: 2021

(xi) Extract the whole word between @doglovers@
-Formula: =regexextract(C,”\@([A-Za-z]+)\@”)
-Result: doglovers

Or Formula: =regexextract(C,”<(.+)>”)		

## REGEXREPLACE

```
Syntax
=REGEXREPLACE(input, regular_expression, output)
```

(i) Remove all Spaces
-Formula: =regexreplace(C,”\s”,””)
-Result: Dogloversaregood2021
Note: “\s” the whitespace regular expression

Example: C= Doglovers and her 10 Beagles are conquering Everest 2021.02
(ii) Replace numbers including decimal only
-Formula: =regexreplace(C,”[0-9]*\.[0-9]+[0-9]+”,””)
-Result: Doglovers and her 10 Beagles are conquering Everest

(iii) Replace any prefix to a number
-Formula: =regexreplace(C,”(\w*)\s[\d\.]+”,””)
-Result: Doglovers and Beagles are conquering

(iv) Replace all texts and extract numbers
-Formula: =regexreplace(C,”[^\d\.]+”,”|”)
-Result: |10|2021.02

## REGEXMATCH

```
Syntax
=REGEXMATCH(“text”,Regular_expression)
```
FILTER and COUNTIF with REGEXMATCH

1. Wish You were here – Pink Floyd
2. Here I go again -Whitesnake
3. Come as You are – Nirvana
4. Yellow – Coldplay
5. The Flame – Cheap Trick

Any song contains “You” as it own word only?	
- Regular expression: “\bYou\b”
- List formula: =filter(A:A,regexmatch(A:A,”\bYou\b”)=true)
- Count formula: =countif(arrayformula(regexmatch(A:A,”\bYou\b”)),TRUE)

## FeedBack

If you have any feedback, question, or request you can contact me via the contact form on this blog [CONTACT] or write me an email to michellehlcn.au@gmail.com

If you find my blog and this post useful, please do share it and buy me coffee! Thank you!

## Disclaimer

You should not treat any opinion expressed on this blog as a financial advice. Opinions expressed are based upon information considered reliable, but it does not warrant its completeness or accuracy, and it should not be relied upon as such. This blog is not under any obligation to update or correct any information provided. Statements and opinions are subject to change without notice. No compensation is received. You should consider whether it is suitable for your particular circumstances and strongly seeking advice from your own financial adviser.