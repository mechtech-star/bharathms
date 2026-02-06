# Downloads thematic images into ./public/images/
# Run from repository root in PowerShell:
#   .\scripts\download-images.ps1

$images = @(
    @{ url = "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1200&q=80"; out = "public/images/procedural-terrain.jpg" },
    @{ url = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"; out = "public/images/fluid-simulation.jpg" },
    @{ url = "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80"; out = "public/images/shader-playground.jpg" },
    @{ url = "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"; out = "public/images/ar-placement.jpg" },
    @{ url = "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80"; out = "public/images/nn-visualization.jpg" },
    @{ url = "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80"; out = "public/images/particle-benchmark.jpg" },
    @{ url = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80"; out = "public/images/path-planning.jpg" },
    # Ensure the 'local' references also exist in public/
    @{ url = "https://images.unsplash.com/photo-1526378726430-7b8f6b1d04a9?auto=format&fit=crop&w=1200&q=80"; out = "public/Unity.webp" },
    @{ url = "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1200&q=80"; out = "public/webxr.jpg" }
)

# Create folder if missing
$destDir = Join-Path -Path (Get-Location) -ChildPath "public/images"
if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }

foreach ($item in $images) {
    $outPath = Join-Path -Path (Get-Location) -ChildPath $item.out
    Write-Host "Downloading $($item.url) -> $outPath"
    try {
        Invoke-WebRequest -Uri $item.url -OutFile $outPath -UseBasicParsing -ErrorAction Stop
    } catch {
        Write-Warning "Failed to download $($item.url): $_"
    }
}

Write-Host "Done. Check public/images/ and public/ for downloaded files."