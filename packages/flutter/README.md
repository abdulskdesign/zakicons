# zak_icons (Flutter)

A clean, modern open-source icon ecosystem for Flutter with 300+ vector icons.

## Installation

Add to your `pubspec.yaml`:

```yaml
dependencies:
  zak_icons: ^1.0.0
```

## Usage

```dart
import 'package:flutter/material.dart';
import 'package:zak_icons/zak_icons.dart';

Widget build(BuildContext context) {
  return Column(
    children: [
      ZakIcon(
        ZakIcons.truck,
        size: 32,
        color: Colors.blue,
      ),
      ZakIcon(
        ZakIcons.arrowLeft,
        size: 24,
      ),
      ZakIcon(
        ZakIcons.container,
        size: 28,
        color: Colors.green,
      ),
    ],
  );
}
```

## License

MIT
