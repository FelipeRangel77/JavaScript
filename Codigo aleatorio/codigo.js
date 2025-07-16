const fs = require('fs');
const { exec } = require('child_process');

// File path to log.txt
const logFilePath = '"C:\Steam\steamapps\common\wallpaper_engine\log.txt"';

// change executables to what you want
const apps = {
    app1: '"C:\Users\Vinícius\Desktop\Jogos e apps\Counter-Strike 2.url"',
    app2: '"C:\Users\Vinícius\Desktop\Jogos e apps\Assetto Corsa\Content Manager.exe"',
    app3: '"D:\Steam\steamapps\common\F1 24\F1_24.exe"',
    app4: '""D:\Steam\steamapps\common\Grand Theft Auto V Enhanced\GTA5_Enhanced.exe""',
    app5: '"exe"',
    app6: '"exe"',
    app7: '"exe"',
    app8: '"exe"',
    app9: '"exe"',
    app10: '"exe"',
    app11: '"exe"',
    app12: '"exe"'
};

function checkWallpaperLog() {
    fs.watchFile(logFilePath, { interval: 100 }, () => {
        fs.readFile(logFilePath, 'utf8', (err, data) => {
            if (err || !data) return;

            const lines = data.trim().split('\n');
            const lastLine = lines[lines.length - 1];
            const match = lastLine.match(/Log:\s(app\d+)/i);

            if (match) {
                const appKey = match[1].toLowerCase();
                if (apps[appKey]) {
                    console.log(Launching: ${apps[appKey]});
                    fs.truncate(logFilePath, 0, err => {
                        if (!err) exec(apps[appKey]);
                    });
                }
            }
        });
    });
}

checkWallpaperLog();