import {ReactNode, Children, useMemo, isValidElement, JSXElementConstructor, ReactElement, ReactPortal} from "react";

export interface SlotProps {
    name: string;
    children: ReactNode;
}

export function Slot({children}: SlotProps) {
    return (
        <>
            {children}
        </>
    )
}


export interface SlotProviderProps {
    items: ReactNode | null | undefined;
    children: ReactNode;
}

export const useSlottedChildren = (children: ReactNode, items: ReactNode | null | undefined): ReactNode => {
    if (!items || !children) {
        return children;
    }

    const slottedItems = Children.toArray(items).filter(x => isValidElement(x) && x.type === Slot) as Array<ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>>>;

    return Children.map(children, (child) => {
        if (!isValidElement(child)) {
            return child;
        }

        if (child.type !== Slot) {
            return child;
        }

        const slotName = (child.props as SlotProps).name;

        const matchingItem = slottedItems.find(x => (x.props as SlotProps).name === slotName);
        if (!matchingItem) {
            return child;
        }

        return matchingItem;
    })
}

export function SlotProvider({ items, children }: SlotProviderProps) {
    const slottedChildren = useSlottedChildren(children, items);

    return (
        <>
            {slottedChildren}
        </>
    )
}