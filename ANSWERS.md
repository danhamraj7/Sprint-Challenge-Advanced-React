- [ ] Why would you use class component over function components (removing hooks from the question)?

      ans
      When hooks were not present, functional components did not have the ability to handle state.Also they were not able to use lifecycle methods. Hence classes were used to achieve all this.

- [ ] Name three lifecycle methods and their purposes.

      ans
      componentDidMount - This will run after the component has rendered to the DOM, this is generally a good place do asynchronous operations.
      componentDidUpdate - Runs whenever the DOM is updated or state changes.
      componentWillUnmount - Is used for clean up purposes, to remove event listeners, cancel timers et al.

- [ ] What is the purpose of a custom hook?

ans
The purpose of a custom hook is to extract component logic into reusable functions. This will in turn clean up your components.

- [ ] Why is it important to test our apps?

ans
Testing is used for debugging, it helps to find bugs that aren't immediately obvious when creating logic in an app. Sometimes the edge cases are missed if not enough testing is done.
