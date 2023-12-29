// Disable telemetry (data collection)
user_pref("toolkit.telemetry.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);

// Disable WebRTC (to prevent IP leaks)
user_pref("media.peerconnection.enabled", false);

// Disable geolocation
user_pref("geo.enabled", false);

// Disable Pocket
user_pref("extensions.pocket.enabled", false);

// Disable automatic updates
//user_pref("app.update.auto", false);
//user_pref("app.update.enabled", false);

// Disable Firefox studies
user_pref("app.shield.optoutstudies.enabled", false);

// Enable tracking protection
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// Limit referer information
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// Disable WebGL (may prevent fingerprinting)
user_pref("webgl.disabled", true);

// Enable first-party isolation
user_pref("privacy.firstparty.isolate", true);

// Disable hyperlink auditing
user_pref("browser.send_pings", false);

// Disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);

// Disable speculative pre-connections
user_pref("network.prefetch-next", false);

// Disable automatic loading of remote fonts
user_pref("browser.display.use_document_fonts", 0);

// Disable telemetry archiving
user_pref("toolkit.telemetry.archive.enabled", false);

// Disable crash reporting
user_pref("breakpad.reportURL", "");

// Disable WebIDE
user_pref("devtools.webide.enabled", false);