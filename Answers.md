1. What problem does the context API help solve?
        It resolves the problem of prop drilling through multiple components to reach certain nested components.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
        The action tells the reducer what to do with the state. The reducer is a pure function that changes the state depending on which action is called. The store is what holds all the state that is distributed throughout the application. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
       Application state is global and can be accessed thoughout the entire application. Component state is local and can only be accessed inside of the component where it was created. A good time to use one over the other is when you may have multiple deeply nested components that need certain state, to avoid prop drilling you would want to use application state.  

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        Thunk is a middleWare that fires in between the action and reducer. MiddleWare can delay the dispatch of an action or dispatch through a certian criteria.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
        I really do enjoy using redux now. At first I coudn't stand it and would try to avoid it as much as possible. Now that I am starting to understand it better I am starting to like it more and more. The first time I took this sprint I didn't even complete it because I didn't fully understand the material. I'm glad I decided to flex because this time around I was able to finish and complete some of the stretch.
