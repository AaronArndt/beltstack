$root = Join-Path $PSScriptRoot ".."
Get-ChildItem -Path (Join-Path $root "app"), (Join-Path $root "components") -Recurse -Include *.tsx -File | ForEach-Object {
  $c = [IO.File]::ReadAllText($_.FullName)
  $n = $c -replace '"w-full rounded-lg border border-stone-200', '"w-full rounded-md border border-stone-200'
  if ($c -ne $n) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [IO.File]::WriteAllText($_.FullName, $n, $utf8)
    Write-Host "Updated: $($_.FullName)"
  }
}
