import {ReactNode} from "react";
import {Slot, SlotProvider} from "./Slot.tsx";

export interface TestComponentProps {
    children?: ReactNode;
}

export function TestComponent({ children }: TestComponentProps) {
    return (
        <div>
            <SlotProvider items={children}>
                <Slot name={'heading'}>
                    <h1>Title</h1>
                </Slot>
                <Slot name={'description'}>
                    <p>Description</p>
                </Slot>
            </SlotProvider>
        </div>
    )
}