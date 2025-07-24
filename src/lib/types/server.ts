export interface ServerStatus {
    cpu: number
    cpuCores: number,
    logicalPro: number,
    cpuSpeedMhz: number,
    mem: {
        current: number,
        total: number,
    },
    swap: {
        current: number,
        total: number,
    },
    disk: {
        current: number,
        total: number,
    },
    xray: {
        state: string,
        errorMsg: string,
        version: string
    },
    uptime: number,
    loads: number[],
    tcpCount: number,
    udpCount: number,
    netIO: {
        up: number,
        down: number,
    },
    netTraffic: {
        sent: number,
        recv: number,
    },
    publicIP: {
        ipv4: string,
        ipv6: string
    },
    appStats: {
        threads: number,
        mem: number,
        uptime: number,
    }
}