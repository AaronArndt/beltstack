$root = Join-Path $PSScriptRoot ".."
$files = Get-ChildItem -Path (Join-Path $root "app"), (Join-Path $root "components") -Recurse -Include *.tsx -File
foreach ($f in $files) {
  $c = [IO.File]::ReadAllText($f.FullName)
  $n = $c -replace 'rounded-xl', 'rounded-lg' -replace 'bg-\[#F5F5F4\]', 'bg-background'
  if ($c -ne $n) {
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [IO.File]::WriteAllText($f.FullName, $n, $utf8)
    Write-Host "Updated: $($f.FullName)"
  }
}
