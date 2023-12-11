import React from "react";

export function CardHeader({ children }: React.PropsWithChildren) {
    return <>{children}</>;
}

export function CardFooter({ children }: React.PropsWithChildren) {
    return <>{children}</>;
}

export function Card({ children }: React.PropsWithChildren) {
    let footer;
    const content: React.ReactElement[] = [];

    React.Children.forEach(children, child => {
        if (!React.isValidElement(child)) {return;}

        if (child.type === CardFooter) {
            footer = child;
        } else {
            content.push(child);
        }
    });

    return (
        <div className="card">
            {content}
            {!!footer && <div className="card-footer">{footer}</div>}
        </div>
    );
}
