#!/bin/bash

SESSION="sahm"

# close existing session if it exists
tmux has-session -t $SESSION 2>/dev/null
if [ $? == 0 ]; then
  tmux kill-session -t $SESSION
fi
# Create a new session
tmux new-session -d -s $SESSION

tmux new-window -t $SESSION:1 -n 'nvim'
tmux send-keys -t $SESSION:1 'nvim' C-m

# Window 2: php artisan serve
tmux new-window -t $SESSION:2 -n 'serve'
tmux send-keys -t $SESSION:2 'php artisan serve' C-m

# Window 3: tail laravel log
tmux new-window -t $SESSION:3 -n 'log'
tmux send-keys -t $SESSION:3 'tail -f storage/logs/laravel.log' C-m

# Attach to session
tmux select-window -t $SESSION:1
tmux attach-session -t $SESSION
