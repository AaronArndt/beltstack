$root = Join-Path $PSScriptRoot ".."
Get-ChildItem -Path (Join-Path $root "app"), (Join-Path $root "components") -Recurse -Include *.tsx -File | ForEach-Object {
  $c = [IO.File]::ReadAllText($_.FullName)
  $n = $c -replace 'border-neutral-200/70', 'border-stone-200/80' -replace 'border-neutral-300/70', 'border-stone-300/80'
  if ($c -ne $n) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [IO.File]::WriteAllText($_.FullName, $n, $utf8)
    Write-Host "Updated: $($_.FullName)"
  }
}
