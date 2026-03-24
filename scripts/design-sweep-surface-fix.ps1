# Cards bordered as surfaces should be white, not page background
$root = Join-Path $PSScriptRoot ".."
Get-ChildItem -Path (Join-Path $root "app"), (Join-Path $root "components") -Recurse -Include *.tsx -File | ForEach-Object {
  $c = [IO.File]::ReadAllText($_.FullName)
  $n = $c `
    -replace 'border border-stone-200 bg-background p-5', 'border border-stone-200 bg-white p-5' `
    -replace 'border border-stone-200 bg-background p-6', 'border border-stone-200 bg-white p-6' `
    -replace 'border border-stone-200 bg-background p-4', 'border border-stone-200 bg-white p-4' `
    -replace 'border-neutral-200/60 bg-background', 'border-stone-200/80 bg-white' `
    -replace 'border-b border-stone-200 bg-background"', 'border-b border-stone-200 bg-stone-50"'
  if ($c -ne $n) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [IO.File]::WriteAllText($_.FullName, $n, $utf8)
    Write-Host "Updated: $($_.FullName)"
  }
}
