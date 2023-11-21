const os = require('os');

const obj = {
     name : os.hostname(),
     machine : os.machine(),
     platform : os.platform(),
     freeSpace : os.freemem(),
     totalSpace : os.totalmem(),
     relase : os.release(),
     upTime : os.uptime(),
     verson : os.version(),
     priority : os.getPriority()
     // startinTime : os.t
}

console.log(obj);