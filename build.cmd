ruby railgen.rb reddit-pve-7-rails.yaml
ruby railgen.rb -t templates/subwaymap.haml reddit-pve-7-rails.yaml
python generate-nodes.py reddit-pve-7-rails.yaml pve-7-rails-connection.js  --javascript --quiet
ruby railgen.rb reddit-pve-7-rails.yaml -t templates/dynmap.haml -o userscript/dynmap.js