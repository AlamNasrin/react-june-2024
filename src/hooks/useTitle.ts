import { useEffect } from "react";

// useTitle("Home")

export function useTitle(title: string) {
    useEffect(() => {
        const originalTitle = document.title;
        document.title = title;

        return() => {
            document.title = originalTitle; // unmounting title on navigating away from Home page
        }
    }, []);
}