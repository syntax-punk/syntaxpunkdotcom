---
title: 'CQRS — separating asking from telling'
date: '2026-08-07'
short: "Once you start thinking in events, a new question shows up naturally:"
hashtags: "tech,dev,architecture"
---

**"If writing data and reading data are such different jobs, why do we force one single model to do both?"** {.hero-margin}

Think about a restaurant. In the back, the kitchen is a `write-heavy`, correctness obsessed machine with a lot of moving parts. Orders come in, they get validated (is that ingredient even in stock), they get sequenced, cooked in the right order, plated exactly right. {.margin1}

Now if you want to optimize the kitchen for people who come in and browse for the available dishes, that would be a disaster. Nobody wants their kitchen **optimized for browsing**. They want it optimized for speed and for getting orders right. {.margin1}

Out front, completely different story. There's the menu board in front of the restaurant and a menu on every table. It's `read-heavy`. Customers can easily check the menu and make a decision in ten seconds, no hassle. Nobody expects the menu board to do more than display the available dishes. It's shaped entirely for fast and easy access and consumption. Same information, entirely different shape, entirely different task. {.margin1}

That's CQRS — Command Query Responsibility Segregation. Separate the model that handles writes (commands).{codeword} from the model that handles reads (queries).{codeword}. They don't have to be the same shape and they don't even have to be the same database. {.margin1}

Why does this matter architecturally? Because now you can scale, shape, and even choose completely different storage technology for reads versus writes, independently. Maybe writes go to a relational store because you need transactional guarantees. Maybe reads go to a search index, or a cache, or three different projections for three different dashboards: order history, supplies storage and a JSON blob for the mobile app. Same events, three completely different "menu boards", each optimized for to solve its specific task. {.margin1}

Cheers! 🍻 {.margin2}
