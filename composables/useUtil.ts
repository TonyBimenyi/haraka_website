export const useUtil = () => {
    const greet = () => console.log("Hello from useUtil composable!");
    return { greet }
}