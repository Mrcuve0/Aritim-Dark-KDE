var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "800",
                    "DialogWidth": "1420"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "arrangement": "1",
                    "iconSize": "3",
                    "positions": "15,10,desktop:/trash:⁄.desktop,14,9,desktop:/Home.desktop,0,1,desktop:/Your Stuff Here,1,1",
                    "showToolbox": "false",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/sem/Pictures/Wallpapers/Unsplash/jeremy-bishop-485848-unsplash.jpg"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "5"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "5"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "5"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "customButtonImage": "start-here-manjaro",
                            "favoriteSystemActions": "save-session",
                            "favoritesPortedToKAstats": "true",
                            "useCustomButtonImage": "true"
                        },
                        "/Configuration/Configuration/General": {
                            "customButtonImage": "start-here-manjaro",
                            "favoriteSystemActions": "save-session",
                            "favoritesPortedToKAstats": "true",
                            "useCustomButtonImage": "true"
                        },
                        "/Configuration/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Configuration/General": {
                            "customButtonImage": "start-here-kde",
                            "favoriteSystemActions": "save-session",
                            "favoritesPortedToKAstats": "true",
                            "useCustomButtonImage": "true"
                        },
                        "/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kicker"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "bold": "true",
                            "noWindowType": "desktopName",
                            "textType": "1"
                        },
                        "/Configuration/Configuration/General": {
                            "bold": "true",
                            "textType": "1"
                        },
                        "/Configuration/General": {
                            "bold": "true",
                            "textType": "1"
                        }
                    },
                    "plugin": "org.communia.apptitle"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:org.kde.dolphin.desktop,applications:firefox.desktop,applications:telegramdesktop.desktop,applications:clementine.desktop,applications:spotify.desktop,applications:visual-studio-code.desktop,applications:virtualbox.desktop,applications:qbittorrent.desktop,applications:octopi.desktop,applications:org.kde.ksysguard.desktop,applications:systemsettings.desktop"
                        },
                        "/Configuration/Configuration/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:org.kde.dolphin.desktop,applications:firefox.desktop,applications:telegramdesktop.desktop,applications:clementine.desktop,applications:spotify.desktop,applications:visual-studio-code.desktop,applications:virt-manager.desktop,applications:qbittorrent.desktop,applications:octopi.desktop,applications:org.kde.ksysguard.desktop,applications:systemsettings.desktop"
                        },
                        "/Configuration/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:org.kde.dolphin.desktop,applications:firefox.desktop,applications:telegramdesktop.desktop,applications:clementine.desktop,applications:spotify.desktop,applications:visual-studio-code.desktop,applications:virtualbox.desktop,applications:qbittorrent.desktop,applications:octopi.desktop,applications:org.kde.ksysguard.desktop,applications:systemsettings.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "10"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "10"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "10"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "noteId": "677f07c8-b2ce-4f92-bb65-76e3fb4c08"
                        }
                    },
                    "plugin": "org.kde.netspeedWidget"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/Configuration/Containments/8": {
                            "formfactor": "2"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "93"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "gr.ictpro.jsalatas.plasma.pstate"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "showSeconds": "true"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Appearance": {
                            "showSeconds": "true"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/Appearance": {
                            "showSeconds": "true"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "show_lockScreen": "false"
                        },
                        "/Configuration/Configuration/General": {
                            "show_lockScreen": "false"
                        },
                        "/Configuration/General": {
                            "show_lockScreen": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "74",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.4444444444444444,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
