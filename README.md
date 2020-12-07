# Starboard Browser

Starboard is a modular browser for all platforms that will allow you to browse in speed and fashion.<br>
Instructions for running on RasPi:

```
cd /opt
sudo git clone https://github.com/starboardops/starboard.desktop
cd starboard.desktop
npm install
npm run compile-arm-linux
npm run compile-arm-mac
npm run compile-arm-win32
```

(running assumes you already have npm & electron installed. performance is best on a pi 2+. read more about it on our blog. as we don't own any arm devices,
you must compile yourself. report issues in the issue page.)
