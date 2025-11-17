import SongName from "./SongName";

export function SongCard({ title, artists, cover_path }: SongData) {
    return (
        <div class="card">
            <div class="image">
                <img src={cover_path} alt="cover" />
            </div>
            <div class="titles">
                <SongName title={title}/>
                <span class="artist">{artists?.map((name) => name)}</span>
            </div>
        </div>
    )
}
