## Front End Link
-https://voluble-chaja-841a68.netlify.app/

During the development of the `useFetch` custom hook, several key decisions were made to ensure clarity, reusability, and robustness:

* **Abstracting Fetch Logic into a Custom Hook**
  The primary decision was to encapsulate the repetitive data-fetching logic into a dedicated `useFetch` hook. This separation allows components to focus purely on UI, while the hook manages the asynchronous operations behind the scenes.

* **Simple and Consistent Return Structure**
  The hook returns a consistent structure containing `data`, `loading`, and `error` states. This decision makes it intuitive to use and allows developers to handle all common scenarios (success, loading, and failure) in a standardized way.

* **Use of `useEffect` and `useState`**
  React’s `useEffect` is used to trigger the fetch operation whenever the input URL changes. `useState` manages the internal state of the fetched data, loading indicator, and any errors.

* **Optional Use of `useCallback`**
  `useCallback` can be used to memoize the fetch function if extended in future versions, preventing unnecessary function recreations and side effects.

* **Error Handling and Cleanup**
  The hook includes proper error catching to handle scenarios like network failure or invalid responses. Additionally, it supports cleanup (for example, using `AbortController`) to prevent memory leaks when components unmount during an ongoing fetch.

* **Scalable File Organization**
  The hook is placed in a separate file (such as `hooks/useFetch.js`) to promote modular architecture. This allows for easier maintenance and the addition of more custom hooks in the future.

* **Minimalistic Example Component**
  A clean and simple component was created to demonstrate how to use the `useFetch` hook effectively. The focus is on functionality, with the flexibility to enhance UI and interactivity later.

These enhancements ensure that the custom hook is easy to understand, reliable in handling real-world scenarios, and flexible enough to be reused across multiple components in any React application.
