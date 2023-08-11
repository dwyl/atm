<div align="center">
    <img src="https://github.com/dwyl/atm/assets/194400/1d71bfb3-1c55-46f0-8c0e-b72b725937bd" height="300">
    <h1><b>A</b>ctionable <b>T</b>imely <b>M</b>etrics.</h1>

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/dwyl/atm/ci.yml?label=build&style=flat-square&branch=main)
[![codecov.io](https://img.shields.io/codecov/c/github/dwyl/atm/main.svg?style=flat-square)](https://codecov.io/github/dwyl/atm?branch=main)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/dwyl/atm/issues)
[![HitCount](https://hits.dwyl.com/dwyl/atm.svg?style=flat-square&show=unique)](https://hits.dwyl.com/dwyl/atm)

</div>

# Why? 🤷‍♀️

We needed a **_much_ better way**
of **tracking, viewing and _acting_ on**
**metrics** in our projects.

## Data Driven? 🙈

After **20 years** of working 
in Web Application/Site Development,
with more than 100 project teams and organizations
we've noted one alarming fact:

> **_Most_ Product Owners don't _check_ Google Analytics** 
or use the **insights** to **_drive_ decisions**. 

If the **_leaders_ aren't data driven**,
_nobody_ `else` in the team will be. 
And ultimately the project/product will fail.
Or if it succeeds, 
it will be _despite_ the leaders. 


# What?

For now this project 
is for our _internal_ use 
while building our 
[`MVP`](https://github.com/dwyl/mvp/) 
and various supporting services like 
[`auth`](https://github.com/dwyl/auth),
[`imgup`](https://github.com/dwyl/imgup)
and
[`linky`](https://github.com/dwyl/linky)

But "roadmap" is to build a fully featured analytics tool
that can track _any_ client event.
More detail in: 
[atm/issues/16](https://github.com/dwyl/atm/issues/16)



## Name? 🏧 

"ATM" stands for "**A**ctionable **T**imely **M**etrics" 
(_this 
["**backronym**"](https://en.wikipedia.org/wiki/Backronym) 
is not accidental_). 
We _really_ wanted to give this project a name 
that is both short, _memorable_ 
and helps stakeholders _understand_ 
the importance of metrics to the organization!

![free-cash-withdrawals](https://github.com/dwyl/atm/assets/194400/78fda825-5f71-4eed-8738-aef033829d7c)

We want `people` to understand that being data-driven
is like having a "**_free_**" **cash machine**.



# Who?

This project if for the `people`
that _get_ it
and want an easy way for others 
in their team/organization to do the same.

We aim to both
_simplify_ the language/vocabulary around analytics/metrics 
and create a _simple_ way 
of tracking _any_ event in _any_ web/mobile app. 

If it's not _immediately obvious_ **Why** this project 
is valuable and **How** it works, we have failed. 
So if you are scratching your head wondering: 
"_Is this for **me**?_" ... 
**please _help_ us** by describing your situation 
so we can **_help_ you** realize the _value_ 
of the data you are sending 
to Google Analytics 
and then _ignoring_... 

# How?

If you haven't already,
please try the demo: 
[atms.fly.dev](https://atms.fly.dev)


## Run on `localhost`

To run the `ATM` on your machine:

1. Open your terminal 
   and Clone the repository


```sh
git clone git@github.com:dwyl/atm.git && cd atm
```

2. Execute `setup` command to install dependencies and create the `DB`:
```sh
mix setup
``` 

3. Run the App: 
```sh
mix s
```

Now visit 
[`localhost:4000`](http://localhost:4000) 
in your web browser.

## Contributing?

Please read the issues:
