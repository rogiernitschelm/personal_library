## Git summary

## Checkout

Checkout in a different branch:

    git checkout branch_name

Checkout to a new branch (to be created):

    git checkout -b branch_name

Checkout to a previous commit:

    git checkout 0ldc0mm1t

## Reset

Go back one commit and fix stuff:

    git reset --soft HEAD^

Delete all and go back to previous commit:

    git reset --hard HEAD

Go back to a commit and add changes happened after that commit as local modifications:

    git reset HEAD

    git reset HEAD~ // commit's first parent
    git reset HEAD~2 // commit's grand parent

    git reset HEAD^2 // commit's SECOND parent

## Merge conflicts

Checkout in master and pull the latest version.

    git checkout master
    git pull origin master

Checkout in some feature and try to merge with master

    git checkout some_feature
    git merge master

    *poof*

Open tool/Atom and resolve

    git add changes
    git commit -m "fix merge conflict"

Push again

    git push origin some_feature

Win!

## Rebasing

Rebasing and moving all the work from feature to master:

    git checkout feature
    git rebase master

Rebasing and alter commits:

    git checkout feature
    git rebase -i master
