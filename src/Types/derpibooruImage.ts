type Intensities = {
    nw: number;
    ne: number;
    sw: number;
    se: number;
};

type Representations = {
    full: string;
    large: string;
    medium: string;
    small: string;
    thumb_tiny: string;
    [key: string]: string; // To allow for additional representations
};

type DerpibooruImage = {
    animated: boolean;
    aspect_ratio: number;
    comment_count: number;
    created_at: string;
    deletion_reason: string | null;
    description: string;
    downvotes: number;
    duplicate_of: number | null;
    duration: number;
    faves: number;
    first_seen_at: string;
    format: string;
    height: number;
    hidden_from_users: boolean;
    id: number;
    intensities: Intensities;
    mime_type: string;
    name: string;
    orig_sha512_hash: string;
    orig_size: number;
    processed: boolean;
    representations: Representations;
    score: number;
    sha512_hash: string;
    size: number;
    source_url: string;
    source_urls: string[];
    spoilered: boolean;
    tag_count: number;
    tag_ids: number[];
    tags: string[];
    thumbnails_generated: boolean;
    updated_at: string;
    uploader: string;
    uploader_id: number;
    upvotes: number;
    view_url: string;
    width: number;
    wilson_score: number;
};

export default DerpibooruImage;