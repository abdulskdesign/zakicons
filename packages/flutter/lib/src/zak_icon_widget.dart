import 'package:flutter/widgets.dart';
import 'zak_icon_data.dart';

/// A widget that displays a ZAK icon with customizable size, color, and opacity.
class ZakIcon extends StatelessWidget {
  final ZakIconData icon;
  final double? size;
  final Color? color;
  final double opacity;
  final String? semanticLabel;

  const ZakIcon(
    this.icon, {
    super.key,
    this.size = 24.0,
    this.color,
    this.opacity = 1.0,
    this.semanticLabel,
  });

  @override
  Widget build(BuildContext context) {
    final IconThemeData iconTheme = IconTheme.of(context);
    final double iconSize = size ?? iconTheme.size ?? 24.0;
    final Color iconColor = color ?? iconTheme.color ?? const Color(0xFF000000);

    return Semantics(
      label: semanticLabel,
      image: true,
      child: Opacity(
        opacity: opacity,
        child: SizedBox(
          width: iconSize,
          height: iconSize,
          child: CustomPaint(
            painter: _ZakIconPainter(icon: icon, color: iconColor),
          ),
        ),
      ),
    );
  }
}

class _ZakIconPainter extends CustomPainter {
  final ZakIconData icon;
  final Color color;

  _ZakIconPainter({required this.icon, required this.color});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.0 * (size.width / 24.0)
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    // Draw baseline icon canvas frame
    final rect = Rect.fromLTWH(0, 0, size.width, size.height);
    canvas.drawRect(rect, paint..strokeWidth = 0.5);
  }

  @override
  bool shouldRepaint(covariant _ZakIconPainter oldDelegate) =>
      oldDelegate.icon != icon || oldDelegate.color != color;
}
