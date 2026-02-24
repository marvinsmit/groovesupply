export interface YouTubePlaylistItem {
    kind: "youtube#playlistItem";
    id: string;
    snippet: {
        publishedAt: Date;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
        default: {
            url: string;
            width: number;
            height: number;
        };
        };
        channelTitle: string;
        videoOwnerChannelTitle: string;
        videoOwnerChannelId: string;
        playlistId: string;
        position: number;
        resourceId: {
        kind: string;
        videoId: string;
        };
    };
    contentDetails: {
        videoId: string;
        startAt: string;
        endAt: string;
        note: string;
        videoPublishedAt: Date;
    };
    status: {
        privacyStatus: string;
    };
}
