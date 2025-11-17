import { useEffect, useState } from "preact/hooks";

type Props = {
    title: string;
}

// Title over 24 chars will be scrolled with marquee HTML
// Todo enhance with something using actual width in px or smth like that instead of that
const MAX_TITLE_NAME_MARQUEE = 24;

export default function SongName({ title }: Props) {
    const [isMarquee, setIsMarquee] = useState(title?.length > MAX_TITLE_NAME_MARQUEE);

    useEffect(() => {
        setIsMarquee(title?.length > MAX_TITLE_NAME_MARQUEE);
    }, [title]);

    if (isMarquee) {
        return (
            <marquee class="name" behavior="scroll" direction="left">{title}</marquee>
        )
    }
    return (
        <span class="name">{title}</span>
    )
}