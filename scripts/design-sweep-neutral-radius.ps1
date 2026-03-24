# Warmer neutrals (slate chrome -> stone) + slightly tighter radii + lighter shadows
$root = Join-Path $PSScriptRoot ".."
$files = Get-ChildItem -Path (Join-Path $root "app"), (Join-Path $root "components") -Recurse -Include *.tsx -File

$replacements = @(
  @{ Old = 'border-slate-200'; New = 'border-stone-200' }
  @{ Old = 'border-slate-100'; New = 'border-stone-100' }
  @{ Old = 'border-slate-300'; New = 'border-stone-300' }
  @{ Old = 'bg-slate-50'; New = 'bg-stone-50' }
  @{ Old = 'hover:bg-slate-50'; New = 'hover:bg-stone-50' }
  @{ Old = 'hover:bg-slate-50/70'; New = 'hover:bg-stone-50/80' }
  @{ Old = 'ring-slate-200'; New = 'ring-stone-200' }
  @{ Old = 'divide-slate-200'; New = 'divide-stone-200' }
  @{ Old = 'divide-slate-100'; New = 'divide-stone-100' }
  @{ Old = 'shadow-md'; New = 'shadow-sm' }
  # Decorative section underlines: less "brand loud", more editorial
  @{ Old = 'mt-2 h-[2px] w-14 bg-[#10B981]'; New = 'mt-2 h-0.5 w-12 bg-stone-400' }
)

foreach ($f in $files) {
  $c = [IO.File]::ReadAllText($f.FullName)
  $n = $c
  foreach ($r in $replacements) {
    $n = $n -replace [regex]::Escape($r.Old), $r.New
  }
  if ($c -ne $n) {
    $utf8NoBom = New-Object System.Text.UTF8Encoding $false
    [IO.File]::WriteAllText($f.FullName, $n, $utf8NoBom)
    Write-Host "Updated: $($f.FullName)"
  }
}
