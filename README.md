## To Set Up

```
npm ci
npm run serve
```

Hosted by default on http://localhost:7000, but you can change that by changing the ports in `webpack.config.js`

## Summary

This ended up taking me about 5 hours, for a few reasons. The added complexity of Typescript and ESLint wasn't always helpful (though sometimes was!). I've never used Reduc before, so I had to quickly teach myself that (you can see that I still have the Counter demo that I didn't get around to deleting). I also spent a fair bit of time faffing about with tests - I tried to do this in a TDD style, but for some reason I couldn't get it to work like that. I think maybe Front End development and TDD aren't fully compatible in the same way I've begun to think that Unit Tests and Front End development aren't completely compatible. Testing Library really emphasises integration tests, and I lose big chunks of time every time that I forget that.

I also had a slight specification misunderstanding - I ended up only creating a single input box with a single answer, rather than the double-input box I should have to have been more true to the Google currency and floatrates converters. I only realised that right at the end, as I was putting this project to bed, so would rather write about how I'd fix it than actually do so now.

## Choices Made

I chose React with Typescript even though I have a lot more time put into Vue and I've never used Redux. Really I wanted to show off my _Typescript_ knowledge, and I've never done TS with Vue, only with more recent projects on React. I thought the complexities of figuring out types that I've not used before would be more difficult than figuring out a Store system that I knew to be similar to Vuex anyway.

I also noted that your brief mentioned you were moving more towards React than Vue going forwards (much like in my current role) and so thought it would be a more useful learning experience and proof of ability.

Also, I sort of wanted to do something new anyway, and it was a good opportunity to play with Redux. I don't hate it like some people seem to, though I will be interested to hear why you've chosen to focus on Redux over Context given what I've heard about Redux being largely defunct these days.

For the folder naming scheme I just went with what I'm comfortable with. Looking at Redux in particular, it felt more right to split it into `store/index` and `store/slices` than the way the tutorial told me to, just because that's what I'm used to.

For testing I installed React Testing Library. I believe this is the go-to for testing in React, but I actually also started using it for Vue testing last year and have kind of fallen in love. I like the concept of testing almost exactly as a user would interact with the app, and how easy testing library makes that. It really leans into making useful and sturdy test cases in a way that other testing libraries don't. As you can see, though, it did slow me down and I ultimately didn't get any useful tests written because of a conflict between trying to write Unit Tests in a TDD method, using a library that (I feel) doesn't seem to encourage either. Again, would love to know your thoughts on that in particular.

The ESLint and Typescript config are lifted pretty much wholesale from my existing React/Typescript projects. I'm not married to any particular decisions in those configurations, they're just picked up from tutorials that I've used and I've become comfortable with them. Same with Prettier which just came along for the ride because it's all part of the same package to me.

The Webpack configuration is similarly part-lifted from existing projects, but simplified for a simpler project. I could have used Parcel, which is suitable for a smaller project like this but, again, I wanted to show off a little Webpack know-how, I already had most of the config and I'm reasonably comfortable with it, even if it's a bit of a heavyweight for a tech test.

Styling came in right at the end, as I was winding down, so it's short and simple. Not much to say here.

Finally, a quick shout-out to default HTML tags. Maybe it's just because I've spent too long with bad design systems, but I also like the simplicity of using a basic `input` or `select`, and believe they tend to be more performant and accessible as well? Win-win and I prefer to do this whenever I can.

## With more time

I absolutely would have finished off some test cases. One of the beautiful things of Testing Library is that a single test case covers a lot of assertions thanks to the `GetBy` and `FindBy` throwing errors. So I probably wouldn't have had a lot of test cases, but relied on one or two potential interactions to cover most/all outcomes.

I absolutely need to add error handling in here. Even while manually testing I came across a couple of errors that a good try/catch block might have at least prevented from totally crashing the app.

The Typescript could have been a bit more strict - I note this mainly in the API folder where I would have liked to be explicit about what a currency code can look like. Maybe that's overkill though.

I did waste a little time trying to get the select box to default to particular currencies, rather than undefined, but couldn't figure it out. Even when I set the initial value in store the boxes didn't update. This is where I think my lack of experience both with React and Redux let me down - I'm sure it was a case of needing a re-render to update those initial values, because the calculation of them worked fine, just not what the user saw. Ultimately it didn't seem worth spending more than 5-10 minutes on, so I ended up just creating the undefined label and moved on.

And of course, if I'd realised sooner that I should have had two input boxes, I would have componentised the single input box I did have and make it dual purpose. This sort of leads into the organisation of the store, which I'm also sure could be better managed in terms of which keys got stored where, and when. It's probably quite clear that each new key and action was created as needed, rather than built to an intelligent design. I'd definitely give it a second pass to neaten it up.

I kept most stuff in just a single component otherwise, because I didn't feel the need to split things up too much. Taking the input boxes out into a separate component probably would have been the final bit of tidiness to make it feel a little less crowded in the main `CurrencyConverter` component, too.

Style-wise, I'd have liked to get even a simple spinner in instead of loading text and maybe worked on the presentation a teensy bit more.


