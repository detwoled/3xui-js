export interface RealitySettings {
    dest: string;
    serverNames: string[];
    privateKey: string;
    shortIds: string[];
    serverName?: string | undefined;
    show?: boolean | undefined;
    xver?: string | undefined;
    minClientVer?: string | undefined;
    maxClientVer?: string | undefined;
    maxTimeDiff?: number | undefined;
    shortId?: string | undefined;
    settings: {
        publicKey: string;
        spiderX?: string | undefined;
        fingerprint: string;
    }
}