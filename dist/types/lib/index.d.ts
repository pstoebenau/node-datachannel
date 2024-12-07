import { LogLevel, SctpSettings, Direction, Channel, DescriptionType, DataChannelInitConfig, RTCPeerConnectionState, RTCIceConnectionState, RTCSignalingState, RTCIceGatheringState, SelectedCandidateInfo, RtcConfig, WebSocketServerConfiguration } from './types.js';
export { IceServer, ProxyServer, ProxyServerType, RTCIceGathererState, RTCIceTransportState, RTCSdpType, RelayType, TransportPolicy } from './types.js';
import DataChannelStream$1 from './datachannel-stream.js';
import { WebSocketServer } from './websocket-server.js';
import { WebSocket } from './websocket.js';

declare function preload(): void;
declare function initLogger(level: LogLevel): void;
declare function cleanup(): void;
declare function setSctpSettings(settings: SctpSettings): void;
interface Audio {
    addAudioCodec(payloadType: number, codec: string, profile?: string): void;
    addOpusCodec(payloadType: number, profile?: string): string;
    direction(): Direction;
    generateSdp(eol: string, addr: string, port: number): string;
    mid(): string;
    setDirection(dir: Direction): void;
    description(): string;
    removeFormat(fmt: string): void;
    addSSRC(ssrc: number, name?: string, msid?: string, trackID?: string): void;
    removeSSRC(ssrc: number): void;
    replaceSSRC(oldSsrc: number, ssrc: number, name?: string, msid?: string, trackID?: string): void;
    hasSSRC(ssrc: number): boolean;
    getSSRCs(): number[];
    getCNameForSsrc(ssrc: number): string;
    setBitrate(bitRate: number): void;
    getBitrate(): number;
    hasPayloadType(payloadType: number): boolean;
    addRTXCodec(payloadType: number, originalPayloadType: number, clockRate: number): void;
    addRTPMap(): void;
    parseSdpLine(line: string): void;
}
declare const Audio: {
    new (mid: string, dir: Direction): Audio;
};
interface Video {
    addVideoCodec(payloadType: number, codec: string, profile?: string): void;
    addH264Codec(payloadType: number, profile?: string): void;
    addVP8Codec(payloadType: number): void;
    addVP9Codec(payloadType: number): void;
    direction(): Direction;
    generateSdp(eol: string, addr: string, port: number): string;
    mid(): string;
    setDirection(dir: Direction): void;
    description(): string;
    removeFormat(fmt: string): void;
    addSSRC(ssrc: number, name?: string, msid?: string, trackID?: string): void;
    removeSSRC(ssrc: number): void;
    replaceSSRC(oldSsrc: number, ssrc: number, name?: string, msid?: string, trackID?: string): void;
    hasSSRC(ssrc: number): boolean;
    getSSRCs(): number[];
    getCNameForSsrc(ssrc: number): string;
    setBitrate(bitRate: number): void;
    getBitrate(): number;
    hasPayloadType(payloadType: number): boolean;
    addRTXCodec(payloadType: number, originalPayloadType: number, clockRate: number): void;
    addRTPMap(): void;
    parseSdpLine(line: string): void;
}
declare const Video: {
    new (mid: string, dir: Direction): Video;
};
interface Track {
    direction(): Direction;
    mid(): string;
    type(): string;
    close(): void;
    sendMessage(msg: string): boolean;
    sendMessageBinary(buffer: Buffer): boolean;
    isOpen(): boolean;
    isClosed(): boolean;
    bufferedAmount(): number;
    maxMessageSize(): number;
    requestBitrate(bitRate: number): boolean;
    setBufferedAmountLowThreshold(newSize: number): void;
    requestKeyframe(): boolean;
    setMediaHandler(handler: RtcpReceivingSession): void;
    onOpen(cb: () => void): void;
    onClosed(cb: () => void): void;
    onError(cb: (err: string) => void): void;
    onMessage(cb: (msg: Buffer) => void): void;
}
declare const Track: {
    new (): Track;
};
interface DataChannel extends Channel {
    getLabel(): string;
    getId(): number;
    getProtocol(): string;
    close(): void;
    sendMessage(msg: string): boolean;
    sendMessageBinary(buffer: Uint8Array): boolean;
    isOpen(): boolean;
    bufferedAmount(): number;
    maxMessageSize(): number;
    setBufferedAmountLowThreshold(newSize: number): void;
    onOpen(cb: () => void): void;
    onClosed(cb: () => void): void;
    onError(cb: (err: string) => void): void;
    onBufferedAmountLow(cb: () => void): void;
    onMessage(cb: (msg: string | Buffer | ArrayBuffer) => void): void;
}
declare const DataChannel: {};
interface PeerConnection {
    close(): void;
    setLocalDescription(type?: DescriptionType): void;
    setRemoteDescription(sdp: string, type: DescriptionType): void;
    localDescription(): {
        type: DescriptionType;
        sdp: string;
    } | null;
    remoteDescription(): {
        type: DescriptionType;
        sdp: string;
    } | null;
    addRemoteCandidate(candidate: string, mid: string): void;
    createDataChannel(label: string, config?: DataChannelInitConfig): DataChannel;
    addTrack(media: Video | Audio): Track;
    hasMedia(): boolean;
    state(): RTCPeerConnectionState;
    iceState(): RTCIceConnectionState;
    signalingState(): RTCSignalingState;
    gatheringState(): RTCIceGatheringState;
    onLocalDescription(cb: (sdp: string, type: DescriptionType) => void): void;
    onLocalCandidate(cb: (candidate: string, mid: string) => void): void;
    onStateChange(cb: (state: string) => void): void;
    onIceStateChange(cb: (state: string) => void): void;
    onSignalingStateChange(cb: (state: string) => void): void;
    onGatheringStateChange(cb: (state: string) => void): void;
    onDataChannel(cb: (dc: DataChannel) => void): void;
    onTrack(cb: (track: Track) => void): void;
    bytesSent(): number;
    bytesReceived(): number;
    rtt(): number;
    getSelectedCandidatePair(): {
        local: SelectedCandidateInfo;
        remote: SelectedCandidateInfo;
    } | null;
    maxDataChannelId(): number;
    maxMessageSize(): number;
}
declare const PeerConnection: {
    new (peerName: string, config: RtcConfig): PeerConnection;
};
declare class RtcpReceivingSession {
}

declare const DataChannelStream: typeof DataChannelStream$1;
declare const _default: {
    initLogger: typeof initLogger;
    cleanup: typeof cleanup;
    preload: typeof preload;
    setSctpSettings: typeof setSctpSettings;
    RtcpReceivingSession: typeof RtcpReceivingSession;
    Track: new () => Track;
    Video: new (mid: string, dir: Direction) => Video;
    Audio: new (mid: string, dir: Direction) => Audio;
    DataChannel: {};
    PeerConnection: new (peerName: string, config: RtcConfig) => PeerConnection;
    WebSocket: new (config?: WebSocketServerConfiguration) => WebSocket;
    WebSocketServer: typeof WebSocketServer;
    DataChannelStream: typeof DataChannelStream$1;
};

export { Audio, Channel, DataChannel, DataChannelInitConfig, DataChannelStream, DescriptionType, Direction, LogLevel, PeerConnection, RTCIceConnectionState, RTCIceGatheringState, RTCPeerConnectionState, RTCSignalingState, RtcConfig, RtcpReceivingSession, SctpSettings, SelectedCandidateInfo, Track, Video, WebSocket, WebSocketServer, WebSocketServerConfiguration, cleanup, _default as default, initLogger, preload, setSctpSettings };