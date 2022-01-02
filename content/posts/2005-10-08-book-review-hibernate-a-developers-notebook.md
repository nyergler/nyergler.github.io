---
title: 'Book Review: Hibernate: A Developer’s Notebook'
date: 2005-10-08T21:10:43.000Z
categories:
  - reading
slug: book-review-hibernate-a-developers-notebook
---
**Hibernate: A Developer’s Notebook** _James Elliot_

I picked up [Hibernate: A Developer’s Notebook][1]  (H:<span class="caps">ADN</span>) as someone who was famliar with Java, but doesn’t use it for day to day development. I had heard good things about Hibernate, but didn’t really have an immediate application for it. However, after reading the H:<span class="caps">ADN</span>, I am convinced that Hibernate could be a useful addition to my toolbox on future projects. For the uninitiated, [Hibernate][2]  is an Open Source object/relational mapper (<span class="caps">ORM</span>) for Java, or more specifically <span class="caps">JDBC</span> databases. Like all <span class="caps">ORM</span> tools, Hibernate attempts to reduce the inherent pain involved in working with relational databases in an object oriented world. It has been my experience that while relational databases are models of efficiency when it comes to storing and querying information, working with them in applications often leads to a large amount of boilerplate code for loading rows from tables into objects and persisting them back. Past projects have also demonstrated the maintenance load embedded <span class="caps">SQL</span> queries can create for future developers. The goal of an <span class="caps">ORM</span> is to eliminate much if not all of that boilerplate code by providing transparent (or lightweight) persistence and loading facilities to go between the row and object worlds.

H:<span class="caps">ADN</span> is also the first book in O’Reilly’s “Developer Notebook” series I’ve read, so I was curious how the “lab notebook” format would read. Overall I thought H:<span class="caps">ADN</span> did a good job of providing me with the necessary background on Hibernate and how I might use Hibernate to ease the pain of database development. The book uses a running example, that of a music database, throughout the chapters to illustrate topics such as loading/persisting objects (rows), finding particular objects, and translating common relational database idioms to the world of objects â€“ one to many joins and the like. Interestingly Elliot chose to use the all-Java [<span class="caps">HSQLDB</span>][3]  as the database of choice for the examples. He does briefly discuss connecting Hibernate to other more common <span class="caps">RDBMS</span>, but I suppose using the <span class="caps">HSQLDB</span> system allows him to more accurately state what the interactions between Hibernate and the <span class="caps">DB</span> will be. In that regard it’s a good thing, as there are moments when he points out something that he initially did incorrectly and had to go back and fix.

Elliot is nothing if not thorough in demonstrating examples and then walking through what they do in particular. This was a mixed blessing for me. I think Elliot expects the reader to input and run the examples while reading through the book so they can see them in action and use that experiential knowledge in conjunction with the text to understand what goes on behind the scenes. Since I was primarily reading H:<span class="caps">ADN</span> with the goal of getting some background on Hibernateâ€™s facilities, I typically read it over lunch, trying not to drip Special Sauce on the pages. In this setting, the detailed explanations, in the form of â€œWhat Just Happened?â€? grew tiresome. I know what just happened â€“ I can read code, and you told me before what we wanted to happen, so I assume the code did just that. Had I been interactively editing and running code, these details would probably have been more interesting, as Iâ€™m sure there are naggling details that are not immediately obvious simply by reading the code.

Overall I found Elliotâ€™s writing to be clear and natural. Perhaps it is a characteristic of the Developer Notebook series, but the tone was far more conversational than many technology books Iâ€™ve read in the past. If I have any complaints about the format, itâ€™s that the side notes and faux drink circles only distract from the content.



 [1]: http://www.oreilly.com/catalog/hibernate/
 [2]: http://hibernate.org
 [3]: http://hsqldb.sourceforge.net
