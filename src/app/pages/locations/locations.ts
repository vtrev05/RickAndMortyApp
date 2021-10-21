export interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
    location: Location;
}
export interface CharacterInfo {
    info: {
        count: number;
        next: string;
        pages: number;
        prev: string;
    }
    results: Character[];
}
export interface Location {
    name: string;
    type: string;
    dimension: string;
}

export interface Episodes {
    id: string
    episode: string;
    name: string;
    air_date: string;

}