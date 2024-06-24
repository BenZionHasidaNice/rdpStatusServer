import fs from 'fs';
import path from 'path';

const statusFilePath = path.resolve('status', 'status.txt');

function writeStatus(action, ip) {
    const log = `${new Date().toISOString()} - ${action} - ${ip}\n`;
    try {
        fs.appendFileSync(statusFilePath, log);
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export function connect(ip) {
    return writeStatus('CONNECT', ip);
}

export function disconnect(ip) {
    return writeStatus('DISCONNECT', ip);
}
