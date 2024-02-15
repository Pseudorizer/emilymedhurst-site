import type { ComponentType } from "svelte";
import type { Tag } from "./sections/Block";

export const createCrumb = (icon: ComponentType, text: string) => ({
    text,
    icon,
} satisfies Tag)