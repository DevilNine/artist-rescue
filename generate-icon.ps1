# Artist Rescue — programmatic app icon generator (GDI+).
# Draws the exact same design as public/icon.svg (violet tile + white shield
# + pen nib) and rasterizes it to build/icon.png at 512x512. No external art.

Add-Type -AssemblyName System.Drawing

$SIZE = 512
$bmp = New-Object System.Drawing.Bitmap($SIZE, $SIZE)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.Clear([System.Drawing.Color]::Transparent)

function New-Color([int]$r, [int]$gr, [int]$b, [int]$a = 255) {
  return [System.Drawing.Color]::FromArgb($a, $r, $gr, $b)
}

# ── Rounded-square tile with violet diagonal gradient ──
$radius = 116
$tile = New-Object System.Drawing.Drawing2D.GraphicsPath
$d = $radius * 2
$tile.AddArc(0, 0, $d, $d, 180, 90)
$tile.AddArc($SIZE - $d, 0, $d, $d, 270, 90)
$tile.AddArc($SIZE - $d, $SIZE - $d, $d, $d, 0, 90)
$tile.AddArc(0, $SIZE - $d, $d, $d, 90, 90)
$tile.CloseFigure()

$tileRect = New-Object System.Drawing.RectangleF(0, 0, $SIZE, $SIZE)
$tileBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  $tileRect, (New-Color 154 139 255), (New-Color 91 75 208), 45.0)
$g.FillPath($tileBrush, $tile)

# Subtle top sheen
$sheenRect = New-Object System.Drawing.RectangleF(0, 0, $SIZE, 256)
$sheenBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  $sheenRect, (New-Color 255 255 255 40), (New-Color 255 255 255 0), 90.0)
$g.SetClip($tile)
$g.FillRectangle($sheenBrush, 0, 0, $SIZE, 256)
$g.ResetClip()

# ── Protective shield (white) ──
$shield = New-Object System.Drawing.Drawing2D.GraphicsPath
$shield.AddLine(256, 104, 372, 148)
$shield.AddLine(372, 148, 372, 266)
$shield.AddBezier(372, 266, 372, 340, 322, 393, 256, 418)
$shield.AddBezier(256, 418, 190, 393, 140, 340, 140, 266)
$shield.AddLine(140, 266, 140, 148)
$shield.CloseFigure()
$shieldBrush = New-Object System.Drawing.SolidBrush((New-Color 255 255 255 247))
$g.FillPath($shieldBrush, $shield)

# ── Pen nib (violet, vertical gradient) ──
$nib = New-Object System.Drawing.Drawing2D.GraphicsPath
$nib.AddPolygon([System.Drawing.PointF[]]@(
  (New-Object System.Drawing.PointF(212, 196)),
  (New-Object System.Drawing.PointF(300, 196)),
  (New-Object System.Drawing.PointF(256, 322))
))
$nibRect = New-Object System.Drawing.RectangleF(212, 196, 88, 126)
$nibBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  $nibRect, (New-Color 124 108 240), (New-Color 90 73 200), 90.0)
$g.FillPath($nibBrush, $nib)

# Nib slit (white) + vent hole (white)
$slit = New-Object System.Drawing.Drawing2D.GraphicsPath
$slit.AddPolygon([System.Drawing.PointF[]]@(
  (New-Object System.Drawing.PointF(251, 214)),
  (New-Object System.Drawing.PointF(261, 214)),
  (New-Object System.Drawing.PointF(256, 316))
))
$whiteBrush = New-Object System.Drawing.SolidBrush((New-Color 255 255 255))
$g.FillPath($whiteBrush, $slit)
$g.FillEllipse($whiteBrush, 243, 219, 26, 26)

# ── Save ──
$out = Join-Path $PSScriptRoot 'build\icon.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose(); $bmp.Dispose()
Write-Host "Icon generated at $out"
