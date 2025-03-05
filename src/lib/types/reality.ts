export interface RealitySettings {
    fingerprint: string;
    dest: string;
    serverNames: string[];
    privateKey: string;
    shortIds: string[];
    publicKey: string;
    serverName?: string | undefined;
    show?: boolean | undefined;
    xver?: string | undefined;
    minClientVer?: string | undefined;
    maxClientVer?: string | undefined;
    maxTimeDiff?: number | undefined;
    shortId?: string | undefined;
    spiderX?: string | undefined;
}