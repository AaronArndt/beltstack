$root = Join-Path $PSScriptRoot ".."
Get-ChildItem -Path $root -Recurse -Include *.tsx,*.ts,*.css -File |
  Where-Object { $_.FullName -notmatch '\\node_modules\\' -and $_.FullName -notmatch '\\.next\\' } |
  ForEach-Object {
    $p = $_.FullName
    $c = [IO.File]::ReadAllText($p)
    $n = $c `
      -replace '#F8FAFC', '#F5F5F4' `
      -replace '#f8fafc', '#f5f5f4' `
      -replace '#6E6E6E', '#57534E' `
      -replace '#6e6e6e', '#57534e'
    if ($c -ne $n) {
      $utf8NoBom = New-Object System.Text.UTF8Encoding $false
      [IO.File]::WriteAllText($p, $n, $utf8NoBom)
      Write-Host "Updated: $p"
    }
  }
