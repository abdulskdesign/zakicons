/// Holds raw metadata and vector data for a ZAK icon.
class ZakIconData {
  final String name;
  final String category;
  final String svgData;

  const ZakIconData({
    required this.name,
    required this.category,
    required this.svgData,
  });
}

/// Catalog of all 300+ ZAK icons for Flutter.
class ZakIcons {
  /// Accessibility Figure icon in [accessibility] category.
  static const ZakIconData accessibility = ZakIconData(
    name: 'accessibility',
    category: 'accessibility',
    svgData: '<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1M5 8l3-3 5.5 3-2.36 3.5m-6.9 3a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5A5 5 0 0 0 12 11"/>',
  );

  /// Activity Pulse icon in [analytics] category.
  static const ZakIconData activity = ZakIconData(
    name: 'activity',
    category: 'analytics',
    svgData: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  );

  /// Vitality Monitor icon in [health] category.
  static const ZakIconData activitySquare = ZakIconData(
    name: 'activity-square',
    category: 'health',
    svgData: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/>',
  );

  /// Alert Circle icon in [actions] category.
  static const ZakIconData alertCircle = ZakIconData(
    name: 'alert-circle',
    category: 'actions',
    svgData: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>',
  );

  /// Alert Triangle icon in [actions] category.
  static const ZakIconData alertTriangle = ZakIconData(
    name: 'alert-triangle',
    category: 'actions',
    svgData: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"/>',
  );

  /// Anchor icon in [navigation] category.
  static const ZakIconData anchor = ZakIconData(
    name: 'anchor',
    category: 'navigation',
    svgData: '<circle cx="12" cy="5" r="3"/><path d="M12 8v13m-7-9H2a10 10 0 0 0 20 0h-3"/>',
  );

  /// Berth Moor icon in [logistics] category.
  static const ZakIconData anchorDock = ZakIconData(
    name: 'anchor-dock',
    category: 'logistics',
    svgData: '<circle cx="12" cy="7" r="3"/><path d="M12 10v12m-7-8H2a10 10 0 0 0 20 0h-3M2 22h20"/>',
  );

  /// Fresh Apple icon in [food] category.
  static const ZakIconData apple = ZakIconData(
    name: 'apple',
    category: 'food',
    svgData: '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06"/><path d="M10 2c1 .5 2 2 2 5"/>',
  );

  /// Arrow Down icon in [arrows] category.
  static const ZakIconData arrowDown = ZakIconData(
    name: 'arrow-down',
    category: 'arrows',
    svgData: '<path d="M12 5v14m7-7-7 7-7-7"/>',
  );

  /// Arrow Down Left icon in [arrows] category.
  static const ZakIconData arrowDownLeft = ZakIconData(
    name: 'arrow-down-left',
    category: 'arrows',
    svgData: '<path d="M17 7 7 17M7 7v10h10"/>',
  );

  /// Arrow Down Right icon in [arrows] category.
  static const ZakIconData arrowDownRight = ZakIconData(
    name: 'arrow-down-right',
    category: 'arrows',
    svgData: '<path d="m7 7 10 10m0-10v10H7"/>',
  );

  /// Arrow Down To Dot icon in [arrows] category.
  static const ZakIconData arrowDownToDot = ZakIconData(
    name: 'arrow-down-to-dot',
    category: 'arrows',
    svgData: '<path d="M12 2v14m7-7-7 7-7-7"/><circle cx="12" cy="21" r="1"/>',
  );

  /// Arrow Left icon in [arrows] category.
  static const ZakIconData arrowLeft = ZakIconData(
    name: 'arrow-left',
    category: 'arrows',
    svgData: '<path d="M19 12H5m7 7-7-7 7-7"/>',
  );

  /// Arrow Left Right icon in [arrows] category.
  static const ZakIconData arrowLeftRight = ZakIconData(
    name: 'arrow-left-right',
    category: 'arrows',
    svgData: '<path d="M8 3 4 7l4 4m8 10 4-4-4-4M4 7h16m0 10H4"/>',
  );

  /// Arrow Right icon in [arrows] category.
  static const ZakIconData arrowRight = ZakIconData(
    name: 'arrow-right',
    category: 'arrows',
    svgData: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
  );

  /// Arrow Up icon in [arrows] category.
  static const ZakIconData arrowUp = ZakIconData(
    name: 'arrow-up',
    category: 'arrows',
    svgData: '<path d="M12 19V5m-7 7 7-7 7 7"/>',
  );

  /// Arrow Up Down icon in [arrows] category.
  static const ZakIconData arrowUpDown = ZakIconData(
    name: 'arrow-up-down',
    category: 'arrows',
    svgData: '<path d="m3 8 4-4 4 4m10 8-4 4-4-4M7 4v16m10 0V4"/>',
  );

  /// Arrow Up From Dot icon in [arrows] category.
  static const ZakIconData arrowUpFromDot = ZakIconData(
    name: 'arrow-up-from-dot',
    category: 'arrows',
    svgData: '<path d="m5 9 7-7 7 7m-7-7v14"/><circle cx="12" cy="21" r="1"/>',
  );

  /// Arrow Up Left icon in [arrows] category.
  static const ZakIconData arrowUpLeft = ZakIconData(
    name: 'arrow-up-left',
    category: 'arrows',
    svgData: '<path d="M17 17 7 7m10 0H7v10"/>',
  );

  /// Arrow Up Right icon in [arrows] category.
  static const ZakIconData arrowUpRight = ZakIconData(
    name: 'arrow-up-right',
    category: 'arrows',
    svgData: '<path d="M7 17 17 7M7 7h10v10"/>',
  );

  /// At Sign Mention icon in [communication] category.
  static const ZakIconData atSign = ZakIconData(
    name: 'at-sign',
    category: 'communication',
    svgData: '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>',
  );

  /// Quantum Atom icon in [ai] category.
  static const ZakIconData atom = ZakIconData(
    name: 'atom',
    category: 'ai',
    svgData: '<circle cx="12" cy="12" r="2"/><path d="M20.2 20.2c2.4-2.4 2.4-6.3 0-8.7L12 3.3l-8.2 8.2c-2.4 2.4-2.4 6.3 0 8.7s6.3 2.4 8.7 0l8.2-8.2"/><path d="M3.8 3.8c-2.4 2.4-2.4 6.3 0 8.7l8.2 8.2 8.2-8.2c2.4-2.4 2.4-6.3 0-8.7s-6.3-2.4-8.7 0L3.8 12"/>',
  );

  /// Award Ribbon icon in [business] category.
  static const ZakIconData award = ZakIconData(
    name: 'award',
    category: 'business',
    svgData: '<circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>',
  );

  /// Verified Badge icon in [users] category.
  static const ZakIconData badgeCheck = ZakIconData(
    name: 'badge-check',
    category: 'users',
    svgData: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76"/><path d="m9 12 2 2 4-4"/>',
  );

  /// Discount Badge icon in [business] category.
  static const ZakIconData badgePercent = ZakIconData(
    name: 'badge-percent',
    category: 'business',
    svgData: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76M15 9l-6 6"/><circle cx="9.5" cy="9.5" r=".5" fill="currentColor"/><circle cx="14.5" cy="14.5" r=".5" fill="currentColor"/>',
  );

  /// Banknote icon in [finance] category.
  static const ZakIconData banknote = ZakIconData(
    name: 'banknote',
    category: 'finance',
    svgData: '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  );

  /// Bar Chart icon in [analytics] category.
  static const ZakIconData barChart2 = ZakIconData(
    name: 'bar-chart-2',
    category: 'analytics',
    svgData: '<path d="M18 20V10m-6 10V4M6 20v-6"/>',
  );

  /// Barcode icon in [commerce] category.
  static const ZakIconData barcode = ZakIconData(
    name: 'barcode',
    category: 'commerce',
    svgData: '<path d="M3 5v14M6 5v14M8 5v8m0 4v2m4-14v14m3-14v14m2-14v9m0 4v1m4-14v14"/>',
  );

  /// Barcode Scanner icon in [logistics] category.
  static const ZakIconData barcodeScanner = ZakIconData(
    name: 'barcode-scanner',
    category: 'logistics',
    svgData: '<path d="M4 4h5v4H4zm11 0h5v4h-5zM4 16h5v4H4zm11 0h2v4h-2zm4 0h1v4h-1zM2 12h20"/>',
  );

  /// Battery Charging icon in [devices] category.
  static const ZakIconData batteryCharging = ZakIconData(
    name: 'battery-charging',
    category: 'devices',
    svgData: '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19M23 13v-2M11 6l-4 6h6l-4 6"/>',
  );

  /// Notification Bell icon in [communication] category.
  static const ZakIconData bell = ZakIconData(
    name: 'bell',
    category: 'communication',
    svgData: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9m-4.27 13a2 2 0 0 1-3.46 0"/>',
  );

  /// Bell Mute icon in [communication] category.
  static const ZakIconData bellOff = ZakIconData(
    name: 'bell-off',
    category: 'communication',
    svgData: '<path d="M13.73 21a2 2 0 0 1-3.46 0m8.36-8A17.9 17.9 0 0 1 18 8M6.26 6.26A5.9 5.9 0 0 0 6 8c0 7-3 9-3 9h14m1-9a6 6 0 0 0-9.33-5M1 1l22 22"/>',
  );

  /// Bicycle icon in [transportation] category.
  static const ZakIconData bike = ZakIconData(
    name: 'bike',
    category: 'transportation',
    svgData: '<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>',
  );

  /// Visual Assist icon in [accessibility] category.
  static const ZakIconData blind = ZakIconData(
    name: 'blind',
    category: 'accessibility',
    svgData: '<circle cx="8" cy="4" r="1.5"/><path d="m10 8.5-3 5 4 1.5 2 7M7 11l-3 4m10 2 4 4"/>',
  );

  /// Bluetooth icon in [devices] category.
  static const ZakIconData bluetooth = ZakIconData(
    name: 'bluetooth',
    category: 'devices',
    svgData: '<path d="m6.5 6.5 11 11L12 23V1l5.5 5.5-11 11"/>',
  );

  /// Bookmark icon in [actions] category.
  static const ZakIconData bookmark = ZakIconData(
    name: 'bookmark',
    category: 'actions',
    svgData: '<path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  );

  /// AI Bot icon in [ai] category.
  static const ZakIconData bot = ZakIconData(
    name: 'bot',
    category: 'ai',
    svgData: '<rect width="18" height="12" x="3" y="6" rx="2"/><path d="M9 13v-2m6 2v-2m-3-5V2"/><circle cx="12" cy="2" r="1"/><path d="M2 12h1m18 0h1"/>',
  );

  /// Damaged Cargo icon in [logistics] category.
  static const ZakIconData boxAlert = ZakIconData(
    name: 'box-alert',
    category: 'logistics',
    svgData: '<path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0"/><path d="M3.29 7 12 12.01 20.71 7M12 22V12m6 1v4m0 3h.01"/>',
  );

  /// Delivered Box icon in [logistics] category.
  static const ZakIconData boxCheck = ZakIconData(
    name: 'box-check',
    category: 'logistics',
    svgData: '<path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0"/><path d="M3.29 7 12 12.01 20.71 7M12 22V12m4 4 2 2 4-5"/>',
  );

  /// Neural Brain icon in [ai] category.
  static const ZakIconData brain = ZakIconData(
    name: 'brain',
    category: 'ai',
    svgData: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 5Zm5 0A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 5Z"/>',
  );

  /// Briefcase icon in [business] category.
  static const ZakIconData briefcase = ZakIconData(
    name: 'briefcase',
    category: 'business',
    svgData: '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  );

  /// Bug icon in [development] category.
  static const ZakIconData bug = ZakIconData(
    name: 'bug',
    category: 'development',
    svgData: '<rect width="8" height="14" x="8" y="6" rx="4"/><path d="m19 7-3 2M5 7l3 2m11 10-3-2M5 19l3-2m12-4h-4M4 13h4m2-9 1 2m3-2-1 2"/>',
  );

  /// Corporate Building icon in [business] category.
  static const ZakIconData building = ZakIconData(
    name: 'building',
    category: 'business',
    svgData: '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01M9 18h6"/>',
  );

  /// Transit Bus icon in [transportation] category.
  static const ZakIconData bus = ZakIconData(
    name: 'bus',
    category: 'transportation',
    svgData: '<path d="M8 6v6m8-6v6M2 12h20"/><rect width="16" height="16" x="4" y="3" rx="2"/><circle cx="7.5" cy="16.5" r="1.5"/><circle cx="16.5" cy="16.5" r="1.5"/><path d="M6 21v1m12-1v1"/>',
  );

  /// Birthday Cake icon in [food] category.
  static const ZakIconData cake = ZakIconData(
    name: 'cake',
    category: 'food',
    svgData: '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s2-1 4-1 4 1 4 1 2-1 4-1 4 1 4 1M2 21h20M7 7v4m5-4v4m5-4v4"/><circle cx="7" cy="4" r=".5" fill="currentColor"/><circle cx="12" cy="4" r=".5" fill="currentColor"/><circle cx="17" cy="4" r=".5" fill="currentColor"/>',
  );

  /// Calculator icon in [finance] category.
  static const ZakIconData calculator = ZakIconData(
    name: 'calculator',
    category: 'finance',
    svgData: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/>',
  );

  /// Calendar icon in [calendar] category.
  static const ZakIconData calendar = ZakIconData(
    name: 'calendar',
    category: 'calendar',
    svgData: '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4M8 2v4m-5 4h18"/>',
  );

  /// Calendar Confirmed icon in [calendar] category.
  static const ZakIconData calendarCheck = ZakIconData(
    name: 'calendar-check',
    category: 'calendar',
    svgData: '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4M8 2v4m-5 4h18M9 16l2 2 4-4"/>',
  );

  /// Calendar Grid icon in [calendar] category.
  static const ZakIconData calendarDays = ZakIconData(
    name: 'calendar-days',
    category: 'calendar',
    svgData: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4m-5 4h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  );

  /// Camera icon in [media] category.
  static const ZakIconData camera = ZakIconData(
    name: 'camera',
    category: 'media',
    svgData: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  );

  /// Automobile Car icon in [transportation] category.
  static const ZakIconData car = ZakIconData(
    name: 'car',
    category: 'transportation',
    svgData: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.2 1 12 1 12.8V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
  );

  /// Cargo icon in [logistics] category.
  static const ZakIconData cargo = ZakIconData(
    name: 'cargo',
    category: 'logistics',
    svgData: '<path d="m2 9 10-5 10 5-10 5zm0 6 10 5 10-5"/><path d="M2 9v6l10 5 10-5V9"/>',
  );

  /// Cargo Hold Bay icon in [logistics] category.
  static const ZakIconData cargoHold = ZakIconData(
    name: 'cargo-hold',
    category: 'logistics',
    svgData: '<path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 6h16m-8-6v16"/>',
  );

  /// Screen Cast icon in [media] category.
  static const ZakIconData cast = ZakIconData(
    name: 'cast',
    category: 'media',
    svgData: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 20h.01"/>',
  );

  /// Check icon in [actions] category.
  static const ZakIconData check = ZakIconData(
    name: 'check',
    category: 'actions',
    svgData: '<path d="M20 6 9 17l-5-5"/>',
  );

  /// Check Circle icon in [actions] category.
  static const ZakIconData checkCircle = ZakIconData(
    name: 'check-circle',
    category: 'actions',
    svgData: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>',
  );

  /// Checkbox Checked icon in [system] category.
  static const ZakIconData checkSquare = ZakIconData(
    name: 'check-square',
    category: 'system',
    svgData: '<path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  );

  /// Chevron Down icon in [arrows] category.
  static const ZakIconData chevronDown = ZakIconData(
    name: 'chevron-down',
    category: 'arrows',
    svgData: '<path d="m6 9 6 6 6-6"/>',
  );

  /// Chevron Left icon in [arrows] category.
  static const ZakIconData chevronLeft = ZakIconData(
    name: 'chevron-left',
    category: 'arrows',
    svgData: '<path d="m15 18-6-6 6-6"/>',
  );

  /// Chevron Right icon in [arrows] category.
  static const ZakIconData chevronRight = ZakIconData(
    name: 'chevron-right',
    category: 'arrows',
    svgData: '<path d="m9 18 6-6-6-6"/>',
  );

  /// Chevron Up icon in [arrows] category.
  static const ZakIconData chevronUp = ZakIconData(
    name: 'chevron-up',
    category: 'arrows',
    svgData: '<path d="m18 15-6-6-6 6"/>',
  );

  /// Chevrons Down icon in [arrows] category.
  static const ZakIconData chevronsDown = ZakIconData(
    name: 'chevrons-down',
    category: 'arrows',
    svgData: '<path d="m7 13 5 5 5-5M7 6l5 5 5-5"/>',
  );

  /// Chevrons Left icon in [arrows] category.
  static const ZakIconData chevronsLeft = ZakIconData(
    name: 'chevrons-left',
    category: 'arrows',
    svgData: '<path d="m11 17-5-5 5-5m7 10-5-5 5-5"/>',
  );

  /// Chevrons Right icon in [arrows] category.
  static const ZakIconData chevronsRight = ZakIconData(
    name: 'chevrons-right',
    category: 'arrows',
    svgData: '<path d="m13 17 5-5-5-5M6 17l5-5-5-5"/>',
  );

  /// Chevrons Up icon in [arrows] category.
  static const ZakIconData chevronsUp = ZakIconData(
    name: 'chevrons-up',
    category: 'arrows',
    svgData: '<path d="m17 11-5-5-5 5m10 7-5-5-5 5"/>',
  );

  /// AI Circuit icon in [ai] category.
  static const ZakIconData circuitBoard = ZakIconData(
    name: 'circuit-board',
    category: 'ai',
    svgData: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M11 9h4a2 2 0 0 0 2-2V3"/><circle cx="9" cy="9" r="2"/><path d="M7 21v-4a2 2 0 0 1 2-2h4"/><circle cx="15" cy="15" r="2"/>',
  );

  /// Clipboard icon in [files] category.
  static const ZakIconData clipboard = ZakIconData(
    name: 'clipboard',
    category: 'files',
    svgData: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>',
  );

  /// Clipboard Check icon in [files] category.
  static const ZakIconData clipboardCheck = ZakIconData(
    name: 'clipboard-check',
    category: 'files',
    svgData: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="m9 14 2 2 4-4"/>',
  );

  /// Clock icon in [calendar] category.
  static const ZakIconData clock = ZakIconData(
    name: 'clock',
    category: 'calendar',
    svgData: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  );

  /// Cloud icon in [cloud] category.
  static const ZakIconData cloud = ZakIconData(
    name: 'cloud',
    category: 'cloud',
    svgData: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"/>',
  );

  /// Cloud Configuration icon in [cloud] category.
  static const ZakIconData cloudCog = ZakIconData(
    name: 'cloud-cog',
    category: 'cloud',
    svgData: '<path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 4 14.9"/><circle cx="12" cy="17" r="3"/><path d="M12 12v2m0 6v2m-5-5h2m6 0h2"/>',
  );

  /// Cloud Download icon in [cloud] category.
  static const ZakIconData cloudDownload = ZakIconData(
    name: 'cloud-download',
    category: 'cloud',
    svgData: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M8 17l4 4 4-4m-4-5v9"/>',
  );

  /// Misty Fog icon in [weather] category.
  static const ZakIconData cloudFog = ZakIconData(
    name: 'cloud-fog',
    category: 'weather',
    svgData: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M4 18h16M7 21h10"/>',
  );

  /// Thunderstorm icon in [weather] category.
  static const ZakIconData cloudLightning = ZakIconData(
    name: 'cloud-lightning',
    category: 'weather',
    svgData: '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><path d="m13 11-4 6h6l-4 6"/>',
  );

  /// Rain Shower icon in [weather] category.
  static const ZakIconData cloudRain = ZakIconData(
    name: 'cloud-rain',
    category: 'weather',
    svgData: '<path d="M16 13v8m-8-8v8m4-6v8m8-6.42A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>',
  );

  /// Cloud Upload icon in [cloud] category.
  static const ZakIconData cloudUpload = ZakIconData(
    name: 'cloud-upload',
    category: 'cloud',
    svgData: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m16 16-4-4-4 4m4-4v9"/>',
  );

  /// Code icon in [development] category.
  static const ZakIconData code = ZakIconData(
    name: 'code',
    category: 'development',
    svgData: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  );

  /// Code XML / JSX icon in [development] category.
  static const ZakIconData codeXml = ZakIconData(
    name: 'code-xml',
    category: 'development',
    svgData: '<path d="m18 16 4-4-4-4M6 8l-4 4 4 4m8.5-12-5 16"/>',
  );

  /// Coffee Cup icon in [food] category.
  static const ZakIconData coffee = ZakIconData(
    name: 'coffee',
    category: 'food',
    svgData: '<path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zm4-7v3m4-3v3m4-3v3"/>',
  );

  /// Coins icon in [finance] category.
  static const ZakIconData coins = ZakIconData(
    name: 'coins',
    category: 'finance',
    svgData: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4H7z"/>',
  );

  /// Compass icon in [navigation] category.
  static const ZakIconData compass = ZakIconData(
    name: 'compass',
    category: 'navigation',
    svgData: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/>',
  );

  /// Address Book Contact icon in [users] category.
  static const ZakIconData contact = ZakIconData(
    name: 'contact',
    category: 'users',
    svgData: '<path d="M16 2v2M7 2v2m14 4.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.5"/><circle cx="12" cy="11" r="3"/><path d="M17 18.5a5 5 0 0 0-10 0"/>',
  );

  /// Container icon in [logistics] category.
  static const ZakIconData container = ZakIconData(
    name: 'container',
    category: 'logistics',
    svgData: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M7 5v14m5-14v14m5-14v14"/>',
  );

  /// Reefer Cold Container icon in [logistics] category.
  static const ZakIconData containerRefrigerated = ZakIconData(
    name: 'container-refrigerated',
    category: 'logistics',
    svgData: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M7 5v14m5-10v6m-3-3h6m-4.5-1.5 3 3m0-3-3 3"/>',
  );

  /// Stacked Containers icon in [logistics] category.
  static const ZakIconData containerStacked = ZakIconData(
    name: 'container-stacked',
    category: 'logistics',
    svgData: '<rect width="20" height="8" x="2" y="13" rx="1"/><rect width="16" height="8" x="4" y="3" rx="1"/><path d="M7 3v8m5-8v8m5-8v8M7 13v8m5-8v8m5-8v8"/>',
  );

  /// Conveyor Belt icon in [logistics] category.
  static const ZakIconData conveyor = ZakIconData(
    name: 'conveyor',
    category: 'logistics',
    svgData: '<rect width="20" height="5" x="2" y="13" rx="2.5"/><circle cx="6" cy="15.5" r="1"/><circle cx="12" cy="15.5" r="1"/><circle cx="18" cy="15.5" r="1"/><rect width="8" height="7" x="8" y="6" rx="1"/>',
  );

  /// Conveyor Moving Box icon in [logistics] category.
  static const ZakIconData conveyorBox = ZakIconData(
    name: 'conveyor-box',
    category: 'logistics',
    svgData: '<rect width="10" height="8" x="7" y="4" rx="1"/><path d="M2 18h20"/><circle cx="5" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="19" cy="18" r="2"/>',
  );

  /// Copy icon in [actions] category.
  static const ZakIconData copy = ZakIconData(
    name: 'copy',
    category: 'actions',
    svgData: '<rect width="13" height="13" x="9" y="9" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  );

  /// Corner Up Left icon in [arrows] category.
  static const ZakIconData cornerUpLeft = ZakIconData(
    name: 'corner-up-left',
    category: 'arrows',
    svgData: '<path d="M9 14 4 9l5-5"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>',
  );

  /// Corner Up Right icon in [arrows] category.
  static const ZakIconData cornerUpRight = ZakIconData(
    name: 'corner-up-right',
    category: 'arrows',
    svgData: '<path d="m15 14 5-5-5-5"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/>',
  );

  /// Processor CPU icon in [devices] category.
  static const ZakIconData cpu = ZakIconData(
    name: 'cpu',
    category: 'devices',
    svgData: '<rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 9h6v6H9zm0-8v3m6-3v3M9 20v3m6-3v3m5-14h3m-3 5h3M1 9h3m-3 5h3"/>',
  );

  /// Port Crane icon in [logistics] category.
  static const ZakIconData crane = ZakIconData(
    name: 'crane',
    category: 'logistics',
    svgData: '<path d="M4 21h16M6 21V7l14-4v4L9 10v11m8-16v8m-2 0h4"/>',
  );

  /// Crane Jib Arm icon in [logistics] category.
  static const ZakIconData craneArm = ZakIconData(
    name: 'crane-arm',
    category: 'logistics',
    svgData: '<path d="M3 21h18M5 21V5l16 8H5m10 0v6m-2 0h4"/>',
  );

  /// Credit Card icon in [commerce] category.
  static const ZakIconData creditCard = ZakIconData(
    name: 'credit-card',
    category: 'commerce',
    svgData: '<rect width="22" height="16" x="1" y="4" rx="2" ry="2"/><path d="M1 10h22"/>',
  );

  /// First Aid Cross icon in [health] category.
  static const ZakIconData cross = ZakIconData(
    name: 'cross',
    category: 'health',
    svgData: '<path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2z"/>',
  );

  /// Crosshair icon in [navigation] category.
  static const ZakIconData crosshair = ZakIconData(
    name: 'crosshair',
    category: 'navigation',
    svgData: '<circle cx="12" cy="12" r="10"/><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"/>',
  );

  /// Crown Royalty icon in [users] category.
  static const ZakIconData crown = ZakIconData(
    name: 'crown',
    category: 'users',
    svgData: '<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7zm3 16h14"/>',
  );

  /// Cold Beverage icon in [food] category.
  static const ZakIconData cupSoda = ZakIconData(
    name: 'cup-soda',
    category: 'food',
    svgData: '<path d="m6 8 1.75 12.28A2 2 0 0 0 9.73 22h4.54a2 2 0 0 0 1.98-1.72L18 8M5 8h14M7 15h10m-5-7 1-6h2"/>',
  );

  /// Customs icon in [logistics] category.
  static const ZakIconData customs = ZakIconData(
    name: 'customs',
    category: 'logistics',
    svgData: '<path d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><circle cx="12" cy="12" r="10"/>',
  );

  /// Customs Clearance Stamp icon in [logistics] category.
  static const ZakIconData customsStamp = ZakIconData(
    name: 'customs-stamp',
    category: 'logistics',
    svgData: '<path d="M5 22h14M5 18h14l-2-6a4 4 0 0 0-4-3V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4a4 4 0 0 0-4 3l-2 6z"/>',
  );

  /// Database icon in [development] category.
  static const ZakIconData database = ZakIconData(
    name: 'database',
    category: 'development',
    svgData: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  );

  /// Express Delivery icon in [logistics] category.
  static const ZakIconData delivery = ZakIconData(
    name: 'delivery',
    category: 'logistics',
    svgData: '<path d="M2 17h10m-7-3h4m-6-3h8m3 6h2.5a2.5 2.5 0 0 0 2.5-2.5V8a1 1 0 0 0-1-1h-4"/><circle cx="18" cy="18" r="2"/><path d="m16 7 2-4h4"/>',
  );

  /// Audio Disc icon in [media] category.
  static const ZakIconData disc = ZakIconData(
    name: 'disc',
    category: 'media',
    svgData: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>',
  );

  /// Dispatch icon in [logistics] category.
  static const ZakIconData dispatch = ZakIconData(
    name: 'dispatch',
    category: 'logistics',
    svgData: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
  );

  /// DNA Double Helix icon in [health] category.
  static const ZakIconData dna = ZakIconData(
    name: 'dna',
    category: 'health',
    svgData: '<path d="M2 15c6.667-6 13.333 0 20-6M2 9c6.667 6 13.333 0 20 6M12 6v12M7 8.5v7m10-7v7"/>',
  );

  /// Dollar icon in [finance] category.
  static const ZakIconData dollarSign = ZakIconData(
    name: 'dollar-sign',
    category: 'finance',
    svgData: '<path d="M12 1v22m5-18H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  );

  /// Hand Truck Dolly icon in [logistics] category.
  static const ZakIconData dolly = ZakIconData(
    name: 'dolly',
    category: 'logistics',
    svgData: '<circle cx="7" cy="19" r="2"/><path d="m7 17 4-12h2"/><path d="M9 13h9a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9M5 19h2"/>',
  );

  /// Download icon in [actions] category.
  static const ZakIconData download = ZakIconData(
    name: 'download',
    category: 'actions',
    svgData: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5 5 5 5-5m-5 5V3"/>',
  );

  /// Liquid Droplet icon in [health] category.
  static const ZakIconData droplet = ZakIconData(
    name: 'droplet',
    category: 'health',
    svgData: '<path d="m12 2.69 5.66 5.66a8 8 0 1 1-11.31 0z"/>',
  );

  /// Hearing Assist icon in [accessibility] category.
  static const ZakIconData ear = ZakIconData(
    name: 'ear',
    category: 'accessibility',
    svgData: '<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/>',
  );

  /// Edit icon in [actions] category.
  static const ZakIconData edit = ZakIconData(
    name: 'edit',
    category: 'actions',
    svgData: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z"/>',
  );

  /// Industrial Equipment icon in [logistics] category.
  static const ZakIconData equipment = ZakIconData(
    name: 'equipment',
    category: 'logistics',
    svgData: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  );

  /// Expand Diagonal icon in [arrows] category.
  static const ZakIconData expand = ZakIconData(
    name: 'expand',
    category: 'arrows',
    svgData: '<path d="M15 3h6v6m0-6-7 7M9 21H3v-6m0 6 7-7"/>',
  );

  /// External Link icon in [actions] category.
  static const ZakIconData externalLink = ZakIconData(
    name: 'external-link',
    category: 'actions',
    svgData: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"/>',
  );

  /// Eye icon in [actions] category.
  static const ZakIconData eye = ZakIconData(
    name: 'eye',
    category: 'actions',
    svgData: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8"/><circle cx="12" cy="12" r="3"/>',
  );

  /// Eye Off icon in [actions] category.
  static const ZakIconData eyeOff = ZakIconData(
    name: 'eye-off',
    category: 'actions',
    svgData: '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9 9 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"/>',
  );

  /// Fast Forward icon in [media] category.
  static const ZakIconData fastForward = ZakIconData(
    name: 'fast-forward',
    category: 'media',
    svgData: '<path d="m13 19 9-7-9-7zM2 19l9-7-9-7z"/>',
  );

  /// File icon in [files] category.
  static const ZakIconData file = ZakIconData(
    name: 'file',
    category: 'files',
    svgData: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M13 2v7h7"/>',
  );

  /// Zip Archive File icon in [files] category.
  static const ZakIconData fileArchive = ZakIconData(
    name: 'file-archive',
    category: 'files',
    svgData: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><circle cx="10" cy="12" r="1"/><circle cx="10" cy="16" r="1"/><circle cx="10" cy="8" r="1"/><path d="M10 7v1m0 3v1m0 3v1"/>',
  );

  /// File Verified icon in [files] category.
  static const ZakIconData fileCheck = ZakIconData(
    name: 'file-check',
    category: 'files',
    svgData: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 15l2 2 4-4"/>',
  );

  /// File Code icon in [files] category.
  static const ZakIconData fileCode = ZakIconData(
    name: 'file-code',
    category: 'files',
    svgData: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6m-10 5-2 2 2 2m4-4 2 2-2 2"/>',
  );

  /// File Remove icon in [files] category.
  static const ZakIconData fileMinus = ZakIconData(
    name: 'file-minus',
    category: 'files',
    svgData: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 15h6"/>',
  );

  /// File Add icon in [files] category.
  static const ZakIconData filePlus = ZakIconData(
    name: 'file-plus',
    category: 'files',
    svgData: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6m-8 10v-6m-3 3h6"/>',
  );

  /// Signed Document icon in [files] category.
  static const ZakIconData fileSignature = ZakIconData(
    name: 'file-signature',
    category: 'files',
    svgData: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 18q3-3 6 0m-6-3h4"/>',
  );

  /// Spreadsheet File icon in [files] category.
  static const ZakIconData fileSpreadsheet = ZakIconData(
    name: 'file-spreadsheet',
    category: 'files',
    svgData: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8m-8 4h8m-4-4v8"/>',
  );

  /// File Text icon in [files] category.
  static const ZakIconData fileText = ZakIconData(
    name: 'file-text',
    category: 'files',
    svgData: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6m-4 5H8m8 4H8m2-8H8"/>',
  );

  /// Film Strip icon in [media] category.
  static const ZakIconData film = ZakIconData(
    name: 'film',
    category: 'media',
    svgData: '<rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5m10 0h5M17 7h5"/>',
  );

  /// Filter icon in [actions] category.
  static const ZakIconData filter = ZakIconData(
    name: 'filter',
    category: 'actions',
    svgData: '<path d="M22 3H2l8 9.46V19l4 2v-8.54z"/>',
  );

  /// Fingerprint icon in [security] category.
  static const ZakIconData fingerprint = ZakIconData(
    name: 'fingerprint',
    category: 'security',
    svgData: '<path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4m-1.09 6A8 8 0 0 1 8 12c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.5 3.5-1 5m-1-3.9a3 3 0 0 0-1.82-2.6M2 16h.01m19.79 0c.2-1.3.2-2.6.2-4 0-4.4-3.6-8-8-8"/>',
  );

  /// Flag icon in [navigation] category.
  static const ZakIconData flag = ZakIconData(
    name: 'flag',
    category: 'navigation',
    svgData: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zm0 7v-7"/>',
  );

  /// Fleet Dispatch icon in [logistics] category.
  static const ZakIconData fleet = ZakIconData(
    name: 'fleet',
    category: 'logistics',
    svgData: '<path d="M4 14V6h10v8m0-5h4l2 2v3h-6M2 18h2m8 0h2m6 0h2"/><circle cx="6" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>',
  );

  /// Folder icon in [folders] category.
  static const ZakIconData folder = ZakIconData(
    name: 'folder',
    category: 'folders',
    svgData: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  );

  /// Folder Verified icon in [folders] category.
  static const ZakIconData folderCheck = ZakIconData(
    name: 'folder-check',
    category: 'folders',
    svgData: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><path d="m9 14 2 2 4-4"/>',
  );

  /// Folder Secured icon in [folders] category.
  static const ZakIconData folderLock = ZakIconData(
    name: 'folder-lock',
    category: 'folders',
    svgData: '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2"/><rect width="6" height="5" x="9" y="13" rx="1"/><path d="M10 13v-1.5a2 2 0 0 1 4 0V13"/>',
  );

  /// Folder Remove icon in [folders] category.
  static const ZakIconData folderMinus = ZakIconData(
    name: 'folder-minus',
    category: 'folders',
    svgData: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2zM9 14h6"/>',
  );

  /// Folder Open icon in [folders] category.
  static const ZakIconData folderOpen = ZakIconData(
    name: 'folder-open',
    category: 'folders',
    svgData: '<path d="M2 11h20M2 11l3 9h14l3-9M2 11V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v3"/>',
  );

  /// Folder Add icon in [folders] category.
  static const ZakIconData folderPlus = ZakIconData(
    name: 'folder-plus',
    category: 'folders',
    svgData: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2zm-10-8v6m-3-3h6"/>',
  );

  /// Forklift icon in [logistics] category.
  static const ZakIconData forklift = ZakIconData(
    name: 'forklift',
    category: 'logistics',
    svgData: '<circle cx="7" cy="18" r="2"/><circle cx="15" cy="18" r="2"/><path d="M9 18h4m-8 0H3v-5l4-3h4v8m0-11h3v11m3-13v13h4"/>',
  );

  /// Freight Transport icon in [logistics] category.
  static const ZakIconData freight = ZakIconData(
    name: 'freight',
    category: 'logistics',
    svgData: '<rect width="15" height="11" x="1" y="6" rx="1"/><path d="M16 10h4l3 3v4h-7"/><circle cx="5" cy="17" r="2"/><circle cx="12" cy="17" r="2"/><circle cx="19" cy="17" r="2"/>',
  );

  /// Fuel Pump icon in [transportation] category.
  static const ZakIconData fuel = ZakIconData(
    name: 'fuel',
    category: 'transportation',
    svgData: '<path d="M3 22h12M4 9h10m0 13V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18m10-9h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>',
  );

  /// Conversion Funnel icon in [analytics] category.
  static const ZakIconData funnel = ZakIconData(
    name: 'funnel',
    category: 'analytics',
    svgData: '<path d="M22 3H2l8 9.46V19l4 2v-8.54zM6 7h12M8 10h8"/>',
  );

  /// Gate icon in [logistics] category.
  static const ZakIconData gate = ZakIconData(
    name: 'gate',
    category: 'logistics',
    svgData: '<path d="M4 21V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16M4 11h16M9 4v7m6-7v7"/><circle cx="9" cy="16" r="1"/><circle cx="15" cy="16" r="1"/>',
  );

  /// Metric Gauge icon in [analytics] category.
  static const ZakIconData gauge = ZakIconData(
    name: 'gauge',
    category: 'analytics',
    svgData: '<path d="m12 14 4-4M3.34 19a10 10 0 1 1 17.32 0"/>',
  );

  /// Transit Speed icon in [logistics] category.
  static const ZakIconData gaugeSpeed = ZakIconData(
    name: 'gauge-speed',
    category: 'logistics',
    svgData: '<path d="m12 14 4-4M3.34 19a10 10 0 1 1 17.32 0"/>',
  );

  /// Gift icon in [commerce] category.
  static const ZakIconData gift = ZakIconData(
    name: 'gift',
    category: 'commerce',
    svgData: '<path d="M20 12v10H4V12M2 7h20v5H2zm10 15V7m0 0H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7m0 0h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7"/>',
  );

  /// Git Branch icon in [development] category.
  static const ZakIconData gitBranch = ZakIconData(
    name: 'git-branch',
    category: 'development',
    svgData: '<path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  );

  /// Git Commit icon in [development] category.
  static const ZakIconData gitCommit = ZakIconData(
    name: 'git-commit',
    category: 'development',
    svgData: '<circle cx="12" cy="12" r="4"/><path d="M1.05 12H7m10.01 0h5.95"/>',
  );

  /// Git Merge icon in [development] category.
  static const ZakIconData gitMerge = ZakIconData(
    name: 'git-merge',
    category: 'development',
    svgData: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',
  );

  /// Git Pull Request icon in [development] category.
  static const ZakIconData gitPullRequest = ZakIconData(
    name: 'git-pull-request',
    category: 'development',
    svgData: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12"/>',
  );

  /// Globe icon in [navigation] category.
  static const ZakIconData globe = ZakIconData(
    name: 'globe',
    category: 'navigation',
    svgData: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10"/>',
  );

  /// Grid View icon in [system] category.
  static const ZakIconData grid = ZakIconData(
    name: 'grid',
    category: 'system',
    svgData: '<path d="M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zM3 14h7v7H3z"/>',
  );

  /// Hard Drive icon in [devices] category.
  static const ZakIconData hardDrive = ZakIconData(
    name: 'hard-drive',
    category: 'devices',
    svgData: '<path d="M22 12H2m3.45-6.89L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11M6 16h.01M10 16h.01"/>',
  );

  /// Headphones icon in [devices] category.
  static const ZakIconData headphones = ZakIconData(
    name: 'headphones',
    category: 'devices',
    svgData: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
  );

  /// Heart icon in [actions] category.
  static const ZakIconData heart = ZakIconData(
    name: 'heart',
    category: 'actions',
    svgData: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78"/>',
  );

  /// Heart Pulse icon in [health] category.
  static const ZakIconData heartPulse = ZakIconData(
    name: 'heart-pulse',
    category: 'health',
    svgData: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5L11 9l2 6 1.5-3h6.28"/>',
  );

  /// Help Circle icon in [actions] category.
  static const ZakIconData helpCircle = ZakIconData(
    name: 'help-circle',
    category: 'actions',
    svgData: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"/>',
  );

  /// Hotel Stay icon in [travel] category.
  static const ZakIconData hotel = ZakIconData(
    name: 'hotel',
    category: 'travel',
    svgData: '<path d="M10 22v-6.57H6V22H2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v18h-4v-6.57h-4V22zM6 6h2m-2 4h2m8-4h2m-2 4h2"/>',
  );

  /// Hourglass icon in [calendar] category.
  static const ZakIconData hourglass = ZakIconData(
    name: 'hourglass',
    category: 'calendar',
    svgData: '<path d="M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
  );

  /// Distribution Hub icon in [logistics] category.
  static const ZakIconData hub = ZakIconData(
    name: 'hub',
    category: 'logistics',
    svgData: '<circle cx="12" cy="12" r="4"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/><path d="m5.5 5.5 4 4m9-4-4 4m-9 9 4-4m9 4-4-4"/>',
  );

  /// ID Card Badge icon in [users] category.
  static const ZakIconData idCard = ZakIconData(
    name: 'id-card',
    category: 'users',
    svgData: '<rect width="18" height="16" x="3" y="4" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M15 9h2m-2 4h2M7 17h10"/>',
  );

  /// Image icon in [media] category.
  static const ZakIconData image = ZakIconData(
    name: 'image',
    category: 'media',
    svgData: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  );

  /// Inbox icon in [communication] category.
  static const ZakIconData inbox = ZakIconData(
    name: 'inbox',
    category: 'communication',
    svgData: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11"/>',
  );

  /// Info icon in [actions] category.
  static const ZakIconData info = ZakIconData(
    name: 'info',
    category: 'actions',
    svgData: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/>',
  );

  /// Inspection icon in [logistics] category.
  static const ZakIconData inspection = ZakIconData(
    name: 'inspection',
    category: 'logistics',
    svgData: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><circle cx="11" cy="14" r="3"/><path d="m13.5 16.5 3 3"/>',
  );

  /// Logistics Invoice icon in [logistics] category.
  static const ZakIconData invoice = ZakIconData(
    name: 'invoice',
    category: 'logistics',
    svgData: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1zm4 5h8m-8 4h8m-8 4h4"/>',
  );

  /// Access Key icon in [security] category.
  static const ZakIconData key = ZakIconData(
    name: 'key',
    category: 'security',
    svgData: '<path d="m21 2-2 2m-1.5 1.5L14 9l-2-2-4 4 4 4 1-1 3.5 3.5M7 13a4 4 0 1 1-5.66-5.66A4 4 0 0 1 7 13"/>',
  );

  /// Keyboard icon in [devices] category.
  static const ZakIconData keyboard = ZakIconData(
    name: 'keyboard',
    category: 'devices',
    svgData: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M18 13h.01M10 13h4"/>',
  );

  /// Bank Landmark icon in [finance] category.
  static const ZakIconData landmark = ZakIconData(
    name: 'landmark',
    category: 'finance',
    svgData: '<path d="M3 22h18M6 18v-7m4 7v-7m4 7v-7m4 7v-7m-6-9 8 5H4z"/>',
  );

  /// Laptop icon in [devices] category.
  static const ZakIconData laptop = ZakIconData(
    name: 'laptop',
    category: 'devices',
    svgData: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
  );

  /// Map Layers icon in [navigation] category.
  static const ZakIconData layers = ZakIconData(
    name: 'layers',
    category: 'navigation',
    svgData: '<path d="M12 2 2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
  );

  /// Stack Layers icon in [system] category.
  static const ZakIconData layersSystem = ZakIconData(
    name: 'layers-system',
    category: 'system',
    svgData: '<path d="M12 2 2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
  );

  /// Layout Panels icon in [system] category.
  static const ZakIconData layout = ZakIconData(
    name: 'layout',
    category: 'system',
    svgData: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18M9 21V9"/>',
  );

  /// Insight Idea icon in [ai] category.
  static const ZakIconData lightbulb = ZakIconData(
    name: 'lightbulb',
    category: 'ai',
    svgData: '<path d="M9 18h6m-5 4h4m1.09-8c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"/>',
  );

  /// Line Chart icon in [analytics] category.
  static const ZakIconData lineChart = ZakIconData(
    name: 'line-chart',
    category: 'analytics',
    svgData: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  );

  /// Link icon in [actions] category.
  static const ZakIconData link = ZakIconData(
    name: 'link',
    category: 'actions',
    svgData: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  );

  /// List View icon in [system] category.
  static const ZakIconData list = ZakIconData(
    name: 'list',
    category: 'system',
    svgData: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  );

  /// Loader icon in [system] category.
  static const ZakIconData loader = ZakIconData(
    name: 'loader',
    category: 'system',
    svgData: '<path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>',
  );

  /// Locate icon in [navigation] category.
  static const ZakIconData locate = ZakIconData(
    name: 'locate',
    category: 'navigation',
    svgData: '<path d="M2 12h3m14 0h3M12 2v3m0 14v3"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/>',
  );

  /// Lock icon in [actions] category.
  static const ZakIconData lock = ZakIconData(
    name: 'lock',
    category: 'actions',
    svgData: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  );

  /// Log In icon in [system] category.
  static const ZakIconData logIn = ZakIconData(
    name: 'log-in',
    category: 'system',
    svgData: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4m-5-4 5-5-5-5m5 5H3"/>',
  );

  /// Log Out icon in [system] category.
  static const ZakIconData logOut = ZakIconData(
    name: 'log-out',
    category: 'system',
    svgData: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9"/>',
  );

  /// Luggage Suitcase icon in [travel] category.
  static const ZakIconData luggage = ZakIconData(
    name: 'luggage',
    category: 'travel',
    svgData: '<rect width="12" height="14" x="6" y="7" rx="2"/><path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3m-9 5h12M6 16h12"/><circle cx="9" cy="21" r="1"/><circle cx="15" cy="21" r="1"/>',
  );

  /// Mail icon in [communication] category.
  static const ZakIconData mail = ZakIconData(
    name: 'mail',
    category: 'communication',
    svgData: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2"/><path d="m22 6-10 7L2 6"/>',
  );

  /// Map icon in [navigation] category.
  static const ZakIconData map = ZakIconData(
    name: 'map',
    category: 'navigation',
    svgData: '<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4zm7-4v16m8-12v16"/>',
  );

  /// Map Pin icon in [navigation] category.
  static const ZakIconData mapPin = ZakIconData(
    name: 'map-pin',
    category: 'navigation',
    svgData: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0"/><circle cx="12" cy="10" r="3"/>',
  );

  /// Maximize icon in [arrows] category.
  static const ZakIconData maximize2 = ZakIconData(
    name: 'maximize-2',
    category: 'arrows',
    svgData: '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
  );

  /// Menu icon in [system] category.
  static const ZakIconData menu = ZakIconData(
    name: 'menu',
    category: 'system',
    svgData: '<path d="M3 12h18M3 6h18M3 18h18"/>',
  );

  /// Message Circle icon in [communication] category.
  static const ZakIconData messageCircle = ZakIconData(
    name: 'message-circle',
    category: 'communication',
    svgData: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/>',
  );

  /// Message Square icon in [communication] category.
  static const ZakIconData messageSquare = ZakIconData(
    name: 'message-square',
    category: 'communication',
    svgData: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  );

  /// Microphone icon in [media] category.
  static const ZakIconData mic = ZakIconData(
    name: 'mic',
    category: 'media',
    svgData: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2m7 9v4m-4 0h8"/>',
  );

  /// Milestone icon in [navigation] category.
  static const ZakIconData milestone = ZakIconData(
    name: 'milestone',
    category: 'navigation',
    svgData: '<path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l3-3.5zm-6 7v8"/>',
  );

  /// Minimize icon in [arrows] category.
  static const ZakIconData minimize2 = ZakIconData(
    name: 'minimize-2',
    category: 'arrows',
    svgData: '<path d="M4 14h6v6m10-10h-6V4m0 6 7-7M3 21l7-7"/>',
  );

  /// Minus icon in [actions] category.
  static const ZakIconData minus = ZakIconData(
    name: 'minus',
    category: 'actions',
    svgData: '<path d="M5 12h14"/>',
  );

  /// Monitor Screen icon in [devices] category.
  static const ZakIconData monitor = ZakIconData(
    name: 'monitor',
    category: 'devices',
    svgData: '<rect width="20" height="14" x="2" y="3" rx="2" ry="2"/><path d="M8 21h8m-4-4v4"/>',
  );

  /// Dark Theme icon in [system] category.
  static const ZakIconData moonTheme = ZakIconData(
    name: 'moon-theme',
    category: 'system',
    svgData: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79"/>',
  );

  /// More Horizontal icon in [system] category.
  static const ZakIconData moreHorizontal = ZakIconData(
    name: 'more-horizontal',
    category: 'system',
    svgData: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  );

  /// More Vertical icon in [system] category.
  static const ZakIconData moreVertical = ZakIconData(
    name: 'more-vertical',
    category: 'system',
    svgData: '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
  );

  /// Mountain Range icon in [travel] category.
  static const ZakIconData mountain = ZakIconData(
    name: 'mountain',
    category: 'travel',
    svgData: '<path d="m8 3 4 8 5-5 5 15H2z"/>',
  );

  /// Computer Mouse icon in [devices] category.
  static const ZakIconData mouse = ZakIconData(
    name: 'mouse',
    category: 'devices',
    svgData: '<rect width="12" height="18" x="6" y="3" rx="6"/><path d="M12 7v4"/>',
  );

  /// Move Directional icon in [arrows] category.
  static const ZakIconData move = ZakIconData(
    name: 'move',
    category: 'arrows',
    svgData: '<path d="m5 9-3 3 3 3M9 5l3-3 3 3m0 14-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>',
  );

  /// Music Note icon in [media] category.
  static const ZakIconData music = ZakIconData(
    name: 'music',
    category: 'media',
    svgData: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  );

  /// Navigation Arrow icon in [navigation] category.
  static const ZakIconData navigationArrow = ZakIconData(
    name: 'navigation-arrow',
    category: 'navigation',
    svgData: '<path d="m3 11 19-9-9 19-2-8z"/>',
  );

  /// Network Tree icon in [cloud] category.
  static const ZakIconData network = ZakIconData(
    name: 'network',
    category: 'cloud',
    svgData: '<rect width="6" height="6" x="16" y="16" rx="1"/><rect width="6" height="6" x="2" y="16" rx="1"/><rect width="6" height="6" x="9" y="2" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"/>',
  );

  /// Operations Hub icon in [logistics] category.
  static const ZakIconData operations = ZakIconData(
    name: 'operations',
    category: 'logistics',
    svgData: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1"/>',
  );

  /// Package icon in [logistics] category.
  static const ZakIconData package = ZakIconData(
    name: 'package',
    category: 'logistics',
    svgData: '<path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"/><path d="M3.29 7 12 12.01 20.71 7M12 22.08V12"/>',
  );

  /// Package Search icon in [logistics] category.
  static const ZakIconData packageSearch = ZakIconData(
    name: 'package-search',
    category: 'logistics',
    svgData: '<path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0"/><path d="M3.29 7 12 12.01 20.71 7M12 22V12"/><circle cx="18" cy="18" r="3"/><path d="M20.5 20.5 22 22"/>',
  );

  /// Pallet icon in [logistics] category.
  static const ZakIconData pallet = ZakIconData(
    name: 'pallet',
    category: 'logistics',
    svgData: '<rect width="20" height="3" x="2" y="14" rx="1"/><path d="M4 17v4m8-4v4m8-4v4M5 14V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8"/>',
  );

  /// Pallet Jack icon in [logistics] category.
  static const ZakIconData palletTruck = ZakIconData(
    name: 'pallet-truck',
    category: 'logistics',
    svgData: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 17V6h4m0 0 3 7h7v4H6"/>',
  );

  /// Same Day Parcel icon in [logistics] category.
  static const ZakIconData parcelFast = ZakIconData(
    name: 'parcel-fast',
    category: 'logistics',
    svgData: '<path d="m14 3-8 9h6l-2 9 10-11h-6l2-7z"/>',
  );

  /// Passkey Security icon in [security] category.
  static const ZakIconData passkey = ZakIconData(
    name: 'passkey',
    category: 'security',
    svgData: '<circle cx="8" cy="8" r="5"/><path d="m11.5 11.5 7 7M16 16l2.5-2.5m-1 4 2 2"/>',
  );

  /// Pause icon in [media] category.
  static const ZakIconData pause = ZakIconData(
    name: 'pause',
    category: 'media',
    svgData: '<path d="M6 4h4v16H6zm8 0h4v16h-4z"/>',
  );

  /// Percent icon in [finance] category.
  static const ZakIconData percent = ZakIconData(
    name: 'percent',
    category: 'finance',
    svgData: '<path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
  );

  /// Phone icon in [communication] category.
  static const ZakIconData phone = ZakIconData(
    name: 'phone',
    category: 'communication',
    svgData: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92"/>',
  );

  /// Phone Call Active icon in [communication] category.
  static const ZakIconData phoneCall = ZakIconData(
    name: 'phone-call',
    category: 'communication',
    svgData: '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92"/>',
  );

  /// Pie Chart icon in [analytics] category.
  static const ZakIconData pieChart = ZakIconData(
    name: 'pie-chart',
    category: 'analytics',
    svgData: '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
  );

  /// Pie Segment icon in [analytics] category.
  static const ZakIconData pieChartSlice = ZakIconData(
    name: 'pie-chart-slice',
    category: 'analytics',
    svgData: '<path d="M12 2a10 10 0 0 1 10 10H12zm0 10L4.93 4.93A10 10 0 1 0 22 12z"/>',
  );

  /// Piggy Bank icon in [finance] category.
  static const ZakIconData piggyBank = ZakIconData(
    name: 'piggy-bank',
    category: 'finance',
    svgData: '<path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2zm-3 6h.01M9 6v3"/>',
  );

  /// Pill Medicine icon in [health] category.
  static const ZakIconData pill = ZakIconData(
    name: 'pill',
    category: 'health',
    svgData: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7m-2-12 7 7"/>',
  );

  /// Pizza Slice icon in [food] category.
  static const ZakIconData pizza = ZakIconData(
    name: 'pizza',
    category: 'food',
    svgData: '<path d="m2 2 20 7-7 13z"/><circle cx="10" cy="8" r="1"/><circle cx="14" cy="13" r="1"/><circle cx="9" cy="13" r="1"/>',
  );

  /// Airplane Flight icon in [transportation] category.
  static const ZakIconData plane = ZakIconData(
    name: 'plane',
    category: 'transportation',
    svgData: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"/>',
  );

  /// Flight Arrival icon in [transportation] category.
  static const ZakIconData planeLanding = ZakIconData(
    name: 'plane-landing',
    category: 'transportation',
    svgData: '<path d="M2 22h20M3.77 10.77 2 9l2-4 1.1.55 1.57 3.42L11 7.5 10 3l1.5-1.5L15 5l4-2a2 2 0 0 1 2.6 2.6l-2 4 4.5 1-1.5 1.5-4.5-1-1.5 4.5 3.42 1.57.55 1.1-4 2-1.77-1.77"/>',
  );

  /// Flight Departure icon in [transportation] category.
  static const ZakIconData planeTakeoff = ZakIconData(
    name: 'plane-takeoff',
    category: 'transportation',
    svgData: '<path d="M2 22h20M6.36 17.4 4 17l-2-4 1.1-.55 3.42 1.57L11 8.5 7.5 5 9 3.5 14 7l4-2a2 2 0 0 1 2.6 2.6l-2 4 3.5 5 1.5-1.5-3.5-3.5 5.5-4.5 1.57 3.42-.55 1.1-4-2-.4 2.36"/>',
  );

  /// Play icon in [media] category.
  static const ZakIconData play = ZakIconData(
    name: 'play',
    category: 'media',
    svgData: '<path d="m5 3 14 9-14 9z"/>',
  );

  /// Plus icon in [actions] category.
  static const ZakIconData plus = ZakIconData(
    name: 'plus',
    category: 'actions',
    svgData: '<path d="M12 5v14m-7-7h14"/>',
  );

  /// Port icon in [logistics] category.
  static const ZakIconData port = ZakIconData(
    name: 'port',
    category: 'logistics',
    svgData: '<path d="M2 20h20M6 20V8l6-4 6 4v12m-8-8h4m-2 0v8m-8-6 2-1m14 1-2-1"/>',
  );

  /// Power icon in [system] category.
  static const ZakIconData power = ZakIconData(
    name: 'power',
    category: 'system',
    svgData: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10"/>',
  );

  /// Power Off icon in [system] category.
  static const ZakIconData powerOff = ZakIconData(
    name: 'power-off',
    category: 'system',
    svgData: '<path d="M18.36 6.64A9 9 0 0 1 20.77 15M6.16 6.16a9 9 0 1 0 12.68 12.68M12 2v10M1 1l22 22"/>',
  );

  /// Presentation Board icon in [business] category.
  static const ZakIconData presentation = ZakIconData(
    name: 'presentation',
    category: 'business',
    svgData: '<rect width="18" height="12" x="3" y="3" rx="2"/><path d="M8 21h8m-4-6v6M8 9h8m-8 3h4"/>',
  );

  /// Printer icon in [devices] category.
  static const ZakIconData printer = ZakIconData(
    name: 'printer',
    category: 'devices',
    svgData: '<path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/>',
  );

  /// QR Code icon in [commerce] category.
  static const ZakIconData qrCode = ZakIconData(
    name: 'qr-code',
    category: 'commerce',
    svgData: '<path d="M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h3v3h-3zm6 0v3m-6 3h3m3 0v.01"/>',
  );

  /// Radio Selected icon in [system] category.
  static const ZakIconData radioButton = ZakIconData(
    name: 'radio-button',
    category: 'system',
    svgData: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>',
  );

  /// Freight Rail icon in [logistics] category.
  static const ZakIconData rail = ZakIconData(
    name: 'rail',
    category: 'logistics',
    svgData: '<path d="M5 3 2 21M19 3l3 18M4 8h16M3 14h18M2 20h20"/>',
  );

  /// Receipt icon in [commerce] category.
  static const ZakIconData receipt = ZakIconData(
    name: 'receipt',
    category: 'commerce',
    svgData: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1zm4 4h8m-8 4h8m-8 4h4"/>',
  );

  /// Refresh Counter-Clockwise icon in [arrows] category.
  static const ZakIconData refreshCcw = ZakIconData(
    name: 'refresh-ccw',
    category: 'arrows',
    svgData: '<path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>',
  );

  /// Refresh Clockwise icon in [arrows] category.
  static const ZakIconData refreshCw = ZakIconData(
    name: 'refresh-cw',
    category: 'arrows',
    svgData: '<path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>',
  );

  /// Rewind icon in [media] category.
  static const ZakIconData rewind = ZakIconData(
    name: 'rewind',
    category: 'media',
    svgData: '<path d="m11 19-9-7 9-7zm11 0-9-7 9-7z"/>',
  );

  /// Rotate Counter-Clockwise icon in [arrows] category.
  static const ZakIconData rotateCcw = ZakIconData(
    name: 'rotate-ccw',
    category: 'arrows',
    svgData: '<path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>',
  );

  /// Rotate Clockwise icon in [arrows] category.
  static const ZakIconData rotateCw = ZakIconData(
    name: 'rotate-cw',
    category: 'arrows',
    svgData: '<path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>',
  );

  /// Route icon in [navigation] category.
  static const ZakIconData route = ZakIconData(
    name: 'route',
    category: 'navigation',
    svgData: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H12"/>',
  );

  /// Supply Route icon in [logistics] category.
  static const ZakIconData routeLogistics = ZakIconData(
    name: 'route-logistics',
    category: 'logistics',
    svgData: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M6 16v-4a4 4 0 0 1 4-4h4a4 4 0 0 0 4-4v1"/><path d="m15 7 3-2-3-2"/>',
  );

  /// Wi-Fi Router icon in [devices] category.
  static const ZakIconData router = ZakIconData(
    name: 'router',
    category: 'devices',
    svgData: '<rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6.01 18H6m4.01 0H10m5-8v4m2.84-6.83a4 4 0 0 0-5.66 0m8.48-2.83a8 8 0 0 0-11.32 0"/>',
  );

  /// RSS Feed icon in [communication] category.
  static const ZakIconData rss = ZakIconData(
    name: 'rss',
    category: 'communication',
    svgData: '<path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',
  );

  /// Balance Scale icon in [finance] category.
  static const ZakIconData scale = ZakIconData(
    name: 'scale',
    category: 'finance',
    svgData: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m5 5h10M12 3v18M3 7h18"/>',
  );

  /// Bio Scan icon in [security] category.
  static const ZakIconData scan = ZakIconData(
    name: 'scan',
    category: 'security',
    svgData: '<path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/>',
  );

  /// Container Seal Check icon in [logistics] category.
  static const ZakIconData sealCheck = ZakIconData(
    name: 'seal-check',
    category: 'logistics',
    svgData: '<path d="m12 2 7 4v6c0 5.5-3.5 10-7 12-3.5-2-7-6.5-7-12V6z"/><path d="m9 12 2 2 4-4"/>',
  );

  /// High Security Bolt Seal icon in [logistics] category.
  static const ZakIconData sealLock = ZakIconData(
    name: 'seal-lock',
    category: 'logistics',
    svgData: '<rect width="8" height="11" x="8" y="10" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4m-3 4v3"/>',
  );

  /// Search icon in [actions] category.
  static const ZakIconData search = ZakIconData(
    name: 'search',
    category: 'actions',
    svgData: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
  );

  /// Send Message icon in [communication] category.
  static const ZakIconData send = ZakIconData(
    name: 'send',
    category: 'communication',
    svgData: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
  );

  /// Server Rack icon in [devices] category.
  static const ZakIconData server = ZakIconData(
    name: 'server',
    category: 'devices',
    svgData: '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><path d="M6 6h.01M6 18h.01"/>',
  );

  /// Server Operations icon in [cloud] category.
  static const ZakIconData serverCog = ZakIconData(
    name: 'server-cog',
    category: 'cloud',
    svgData: '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01M6 18h.01"/><circle cx="17" cy="18" r="1.5"/><path d="M17 14v1m0 6v1m-3-4h1m4 0h1"/>',
  );

  /// Server Error Incident icon in [cloud] category.
  static const ZakIconData serverCrash = ZakIconData(
    name: 'server-crash',
    category: 'cloud',
    svgData: '<path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2M6 6h.01M6 18h.01M14 6l-4 12"/>',
  );

  /// Settings icon in [actions] category.
  static const ZakIconData settings = ZakIconData(
    name: 'settings',
    category: 'actions',
    svgData: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1"/>',
  );

  /// Share Export icon in [communication] category.
  static const ZakIconData share = ZakIconData(
    name: 'share',
    category: 'communication',
    svgData: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6-4-4-4 4m4-4v13"/>',
  );

  /// Share icon in [actions] category.
  static const ZakIconData share2 = ZakIconData(
    name: 'share-2',
    category: 'actions',
    svgData: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98"/>',
  );

  /// Shield icon in [security] category.
  static const ZakIconData shield = ZakIconData(
    name: 'shield',
    category: 'security',
    svgData: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>',
  );

  /// Shield Warning icon in [security] category.
  static const ZakIconData shieldAlert = ZakIconData(
    name: 'shield-alert',
    category: 'security',
    svgData: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10m0-14v4m0 4h.01"/>',
  );

  /// Shield Verified icon in [security] category.
  static const ZakIconData shieldCheck = ZakIconData(
    name: 'shield-check',
    category: 'security',
    svgData: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>',
  );

  /// Shield Disabled icon in [security] category.
  static const ZakIconData shieldOff = ZakIconData(
    name: 'shield-off',
    category: 'security',
    svgData: '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.11 1.17M4.73 4.73 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38M1 1l22 22"/>',
  );

  /// User Protection icon in [users] category.
  static const ZakIconData shieldUser = ZakIconData(
    name: 'shield-user',
    category: 'users',
    svgData: '<circle cx="10" cy="8" r="4"/><path d="M2 20v-1a6 6 0 0 1 12 0v1m4-9s3 1.5 3 4c0 3-3 5-3 5s-3-2-3-5c0-2.5 3-4 3-4"/>',
  );

  /// Shield Rejected icon in [security] category.
  static const ZakIconData shieldX = ZakIconData(
    name: 'shield-x',
    category: 'security',
    svgData: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10m3-13-6 6m0-6 6 6"/>',
  );

  /// Cargo Ship icon in [logistics] category.
  static const ZakIconData ship = ZakIconData(
    name: 'ship',
    category: 'logistics',
    svgData: '<path d="M2 19c3-1 6-1 10 0s7 1 10 0l-2-7H4zm4-7V6h12v6m-8-6V3h4v3M4 22c3-1 6-1 10 0s7 1 10 0"/>',
  );

  /// Passenger Ferry icon in [transportation] category.
  static const ZakIconData shipBoat = ZakIconData(
    name: 'ship-boat',
    category: 'transportation',
    svgData: '<path d="M2 21c3-1 6-1 10 0s7 1 10 0l-2-6H4zm3-6V8l7-4 7 4v7m-9-7h4"/>',
  );

  /// Shipment icon in [logistics] category.
  static const ZakIconData shipment = ZakIconData(
    name: 'shipment',
    category: 'logistics',
    svgData: '<rect width="18" height="13" x="3" y="8" rx="2"/><path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3m-4 4v5m-3-2.5 3-2.5 3 2.5"/>',
  );

  /// Shopping Bag icon in [commerce] category.
  static const ZakIconData shoppingBag = ZakIconData(
    name: 'shopping-bag',
    category: 'commerce',
    svgData: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  );

  /// Shopping Basket icon in [commerce] category.
  static const ZakIconData shoppingBasket = ZakIconData(
    name: 'shopping-basket',
    category: 'commerce',
    svgData: '<path d="m5 10 4-7m10 7-4-7M2 10h20v2a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8z"/>',
  );

  /// Shopping Cart icon in [commerce] category.
  static const ZakIconData shoppingCart = ZakIconData(
    name: 'shopping-cart',
    category: 'commerce',
    svgData: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
  );

  /// Shrink Diagonal icon in [arrows] category.
  static const ZakIconData shrink = ZakIconData(
    name: 'shrink',
    category: 'arrows',
    svgData: '<path d="M4 14h6v6m4-10 7-7m-1 7h-6V4M3 21l7-7"/>',
  );

  /// Signpost icon in [navigation] category.
  static const ZakIconData signpost = ZakIconData(
    name: 'signpost',
    category: 'navigation',
    svgData: '<path d="M12 3v18M6 5h8l3 3-3 3H6zm12 8h-8l-3 3 3 3h8z"/>',
  );

  /// Sliders icon in [actions] category.
  static const ZakIconData sliders = ZakIconData(
    name: 'sliders',
    category: 'actions',
    svgData: '<path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-6h6m2 8h6"/>',
  );

  /// Horizontal Sliders icon in [system] category.
  static const ZakIconData slidersHorizontal = ZakIconData(
    name: 'sliders-horizontal',
    category: 'system',
    svgData: '<path d="M21 4h-7m-4 0H3m18 8h-9m-4 0H3m18 8h-5m-4 0H3M14 2v4m-6 4v4m8 4v4"/>',
  );

  /// Smartphone icon in [devices] category.
  static const ZakIconData smartphone = ZakIconData(
    name: 'smartphone',
    category: 'devices',
    svgData: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  );

  /// Snowflake icon in [weather] category.
  static const ZakIconData snowflake = ZakIconData(
    name: 'snowflake',
    category: 'weather',
    svgData: '<path d="M2 12h20M12 2v20m8-6-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4m0 16 4-4 4 4"/>',
  );

  /// Sparkles AI icon in [ai] category.
  static const ZakIconData sparkles = ZakIconData(
    name: 'sparkles',
    category: 'ai',
    svgData: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275zM5 3v4m14 10v4M3 5h4m10 14h4"/>',
  );

  /// Audio Speaker icon in [media] category.
  static const ZakIconData speaker = ZakIconData(
    name: 'speaker',
    category: 'media',
    svgData: '<rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="14" r="4"/><path d="M12 6h.01"/>',
  );

  /// Checkbox Empty icon in [system] category.
  static const ZakIconData square = ZakIconData(
    name: 'square',
    category: 'system',
    svgData: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>',
  );

  /// Star icon in [actions] category.
  static const ZakIconData star = ZakIconData(
    name: 'star',
    category: 'actions',
    svgData: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
  );

  /// Stethoscope icon in [health] category.
  static const ZakIconData stethoscope = ZakIconData(
    name: 'stethoscope',
    category: 'health',
    svgData: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
  );

  /// Storefront icon in [commerce] category.
  static const ZakIconData store = ZakIconData(
    name: 'store',
    category: 'commerce',
    svgData: '<path d="m2 9 2-6h16l2 6v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/><path d="M2 9c0 1.66 1.34 3 3 3s3-1.34 3-3c0 1.66 1.34 3 3 3s3-1.34 3-3c0 1.66 1.34 3 3 3s3-1.34 3-3M9 22v-7h6v7"/>',
  );

  /// Sun Clear icon in [weather] category.
  static const ZakIconData sun = ZakIconData(
    name: 'sun',
    category: 'weather',
    svgData: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  );

  /// Beach Island icon in [travel] category.
  static const ZakIconData sunBeach = ZakIconData(
    name: 'sun-beach',
    category: 'travel',
    svgData: '<path d="M2 20c4-1 8 1 12 0s6-1 8 0m-6-4c-2-2-4-5-3-9 2 0 4 1 5 3"/><path d="M14 8c1-3 4-4 7-3-1 2-2 4-4 5"/><circle cx="6" cy="7" r="3"/>',
  );

  /// Light Theme icon in [system] category.
  static const ZakIconData sunTheme = ZakIconData(
    name: 'sun-theme',
    category: 'system',
    svgData: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
  );

  /// Syringe Vaccine icon in [health] category.
  static const ZakIconData syringe = ZakIconData(
    name: 'syringe',
    category: 'health',
    svgData: '<path d="m18 2 4 4m-5 1 3-3m-1 5L8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5m-6 6 4 4m-8 4-3 3M14 4l6 6"/>',
  );

  /// Data Table icon in [analytics] category.
  static const ZakIconData table = ZakIconData(
    name: 'table',
    category: 'analytics',
    svgData: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M3 15h18M9 3v18m6-18v18"/>',
  );

  /// Tablet icon in [devices] category.
  static const ZakIconData tablet = ZakIconData(
    name: 'tablet',
    category: 'devices',
    svgData: '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  );

  /// Price Tag icon in [commerce] category.
  static const ZakIconData tag = ZakIconData(
    name: 'tag',
    category: 'commerce',
    svgData: '<path d="m20.59 13.41-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82M7 7h.01"/>',
  );

  /// Business Target icon in [business] category.
  static const ZakIconData target = ZakIconData(
    name: 'target',
    category: 'business',
    svgData: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  );

  /// Camping Tent icon in [travel] category.
  static const ZakIconData tent = ZakIconData(
    name: 'tent',
    category: 'travel',
    svgData: '<path d="M19 21 12 4 5 21m7-17v17M2 21l3-3m17 3-3-3M9 21h6"/>',
  );

  /// Terminal icon in [development] category.
  static const ZakIconData terminal = ZakIconData(
    name: 'terminal',
    category: 'development',
    svgData: '<path d="m4 17 6-6-6-6m8 14h8"/><rect width="20" height="18" x="2" y="3" rx="2" ry="2"/>',
  );

  /// Thermometer icon in [health] category.
  static const ZakIconData thermometer = ZakIconData(
    name: 'thermometer',
    category: 'health',
    svgData: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0"/>',
  );

  /// High Heat Temperature icon in [weather] category.
  static const ZakIconData thermometerSun = ZakIconData(
    name: 'thermometer-sun',
    category: 'weather',
    svgData: '<path d="M12 9a4 4 0 0 0-2 7.5V18a2 2 0 0 0 4 0v-1.5A4 4 0 0 0 12 9m0-6v2M6.6 6.6 8 8m12-4-2 2M4 12h2m14 0h-2M6.6 17.4 8 16m-4 4 2-2"/>',
  );

  /// Thumbs Down icon in [actions] category.
  static const ZakIconData thumbsDown = ZakIconData(
    name: 'thumbs-down',
    category: 'actions',
    svgData: '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/>',
  );

  /// Thumbs Up icon in [actions] category.
  static const ZakIconData thumbsUp = ZakIconData(
    name: 'thumbs-up',
    category: 'actions',
    svgData: '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>',
  );

  /// Timer icon in [calendar] category.
  static const ZakIconData timer = ZakIconData(
    name: 'timer',
    category: 'calendar',
    svgData: '<path d="M10 2h4m-2 12 3-3"/><circle cx="12" cy="14" r="8"/>',
  );

  /// Toggle Inactive icon in [system] category.
  static const ZakIconData toggleLeft = ZakIconData(
    name: 'toggle-left',
    category: 'system',
    svgData: '<rect width="22" height="14" x="1" y="5" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/>',
  );

  /// Toggle Active icon in [system] category.
  static const ZakIconData toggleRight = ZakIconData(
    name: 'toggle-right',
    category: 'system',
    svgData: '<rect width="22" height="14" x="1" y="5" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/>',
  );

  /// Tool icon in [system] category.
  static const ZakIconData tool = ZakIconData(
    name: 'tool',
    category: 'system',
    svgData: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  );

  /// Package Tracking icon in [logistics] category.
  static const ZakIconData tracking = ZakIconData(
    name: 'tracking',
    category: 'logistics',
    svgData: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3M3 12h2m14 0h2m-9-9v2m0 14v2"/>',
  );

  /// Freight Train icon in [logistics] category.
  static const ZakIconData train = ZakIconData(
    name: 'train',
    category: 'logistics',
    svgData: '<rect width="16" height="15" x="4" y="3" rx="3"/><path d="M4 11h16"/><circle cx="8" cy="15" r="1.5"/><circle cx="16" cy="15" r="1.5"/><path d="m6 21 2-3m10 3-2-3"/>',
  );

  /// Trash icon in [actions] category.
  static const ZakIconData trash2 = ZakIconData(
    name: 'trash-2',
    category: 'actions',
    svgData: '<path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5v6m4-6v6"/>',
  );

  /// Trending Down icon in [analytics] category.
  static const ZakIconData trendingDown = ZakIconData(
    name: 'trending-down',
    category: 'analytics',
    svgData: '<path d="m23 18-9.5-9.5-5 5L1 6"/><path d="M17 18h6v-6"/>',
  );

  /// Trending Up icon in [analytics] category.
  static const ZakIconData trendingUp = ZakIconData(
    name: 'trending-up',
    category: 'analytics',
    svgData: '<path d="m23 6-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>',
  );

  /// Truck icon in [logistics] category.
  static const ZakIconData truck = ZakIconData(
    name: 'truck',
    category: 'logistics',
    svgData: '<path d="M1 3h15v13H1zm15 5h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  );

  /// Umbrella icon in [weather] category.
  static const ZakIconData umbrella = ZakIconData(
    name: 'umbrella',
    category: 'weather',
    svgData: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>',
  );

  /// Unlock icon in [actions] category.
  static const ZakIconData unlock = ZakIconData(
    name: 'unlock',
    category: 'actions',
    svgData: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
  );

  /// Upload icon in [actions] category.
  static const ZakIconData upload = ZakIconData(
    name: 'upload',
    category: 'actions',
    svgData: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m14-7-5-5-5 5m5-5v12"/>',
  );

  /// User icon in [users] category.
  static const ZakIconData user = ZakIconData(
    name: 'user',
    category: 'users',
    svgData: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  );

  /// User Verified icon in [users] category.
  static const ZakIconData userCheck = ZakIconData(
    name: 'user-check',
    category: 'users',
    svgData: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="m17 11 2 2 4-4"/>',
  );

  /// User Remove icon in [users] category.
  static const ZakIconData userMinus = ZakIconData(
    name: 'user-minus',
    category: 'users',
    svgData: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M23 11h-6"/>',
  );

  /// User Add icon in [users] category.
  static const ZakIconData userPlus = ZakIconData(
    name: 'user-plus',
    category: 'users',
    svgData: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6m3-3h-6"/>',
  );

  /// User Blocked icon in [users] category.
  static const ZakIconData userX = ZakIconData(
    name: 'user-x',
    category: 'users',
    svgData: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="m18 8 4 4m0-4-4 4"/>',
  );

  /// Users icon in [users] category.
  static const ZakIconData users = ZakIconData(
    name: 'users',
    category: 'users',
    svgData: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"/>',
  );

  /// Utensils icon in [food] category.
  static const ZakIconData utensils = ZakIconData(
    name: 'utensils',
    category: 'food',
    svgData: '<path d="M18 2v20m3-7V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zM6 22v-7.5A2.5 2.5 0 0 0 3.5 12H3V2h2v5h2V2h2v5h2V2h2v5a2.5 2.5 0 0 1-2.5 2.5V22"/>',
  );

  /// Variable Math icon in [development] category.
  static const ZakIconData variable = ZakIconData(
    name: 'variable',
    category: 'development',
    svgData: '<path d="M8 21s-4-3-4-9 4-9 4-9m8 0s4 3 4 9-4 9-4 9M15 9l-6 6m0-6 6 6"/>',
  );

  /// Safe Vault icon in [finance] category.
  static const ZakIconData vault = ZakIconData(
    name: 'vault',
    category: 'finance',
    svgData: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M12 8v2m0 4v2m-4-4h2m4 0h2m2-2h1m-1 4h1"/>',
  );

  /// Vendor icon in [logistics] category.
  static const ZakIconData vendor = ZakIconData(
    name: 'vendor',
    category: 'logistics',
    svgData: '<path d="m3 9 9-6 9 6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21v-9h6v9M2 9h20"/>',
  );

  /// Video Camera icon in [media] category.
  static const ZakIconData video = ZakIconData(
    name: 'video',
    category: 'media',
    svgData: '<path d="m23 7-7 5 7 5z"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>',
  );

  /// Volume High icon in [media] category.
  static const ZakIconData volume2 = ZakIconData(
    name: 'volume-2',
    category: 'media',
    svgData: '<path d="M11 5 6 9H2v6h4l5 4zm8.07-.07a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>',
  );

  /// Volume Mute icon in [media] category.
  static const ZakIconData volumeX = ZakIconData(
    name: 'volume-x',
    category: 'media',
    svgData: '<path d="M11 5 6 9H2v6h4l5 4zm12 4-6 6m0-6 6 6"/>',
  );

  /// Wallet icon in [finance] category.
  static const ZakIconData wallet = ZakIconData(
    name: 'wallet',
    category: 'finance',
    svgData: '<path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><circle cx="18" cy="14" r="1"/>',
  );

  /// Warehouse icon in [logistics] category.
  static const ZakIconData warehouse = ZakIconData(
    name: 'warehouse',
    category: 'logistics',
    svgData: '<path d="M3 21V9l9-6 9 6v12z"/><path d="M9 21v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8M9 8h6"/>',
  );

  /// Webhook Hook icon in [development] category.
  static const ZakIconData webhook = ZakIconData(
    name: 'webhook',
    category: 'development',
    svgData: '<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><circle cx="12" cy="6" r="4"/><path d="M12 10v4"/><circle cx="18" cy="18" r="3"/>',
  );

  /// Cargo Weight icon in [logistics] category.
  static const ZakIconData weight = ZakIconData(
    name: 'weight',
    category: 'logistics',
    svgData: '<path d="M8 6h8l3 13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><circle cx="12" cy="4" r="2"/>',
  );

  /// Wi-Fi icon in [devices] category.
  static const ZakIconData wifi = ZakIconData(
    name: 'wifi',
    category: 'devices',
    svgData: '<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>',
  );

  /// Wind Breeze icon in [weather] category.
  static const ZakIconData wind = ZakIconData(
    name: 'wind',
    category: 'weather',
    svgData: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>',
  );

  /// Close icon in [actions] category.
  static const ZakIconData x = ZakIconData(
    name: 'x',
    category: 'actions',
    svgData: '<path d="M18 6 6 18M6 6l12 12"/>',
  );

  /// Cross Circle icon in [actions] category.
  static const ZakIconData xCircle = ZakIconData(
    name: 'x-circle',
    category: 'actions',
    svgData: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6m0-6 6 6"/>',
  );

  /// Zap icon in [actions] category.
  static const ZakIconData zap = ZakIconData(
    name: 'zap',
    category: 'actions',
    svgData: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  );
}
