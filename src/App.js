import './App.css';
import GitCommand from './components/GitCommand';

function App() {
  return (
    <div className="App">
      <header>
        <code id="title">💻 Git Good 💪🏼</code>
        <p class="subtitle">Click/tap to copy git commands to your clipboard</p>
      </header>

      {/* LIST OF GIT COMMANDS */}
      <h2>General Use and Navigation</h2>
      <GitCommand name="pwd" command="pwd" tooltip="display current directory path"/>
      <GitCommand name="ls" command="ls" tooltip="display current directory contents"/>
      <GitCommand name="cd" command="cd" tooltip="change directory"/>
      <GitCommand name="cd ~" command="cd ~" tooltip="change directory to home"/>
      <GitCommand name="cd .." command="cd .." tooltip="change directory to parent"/>
      <GitCommand name="mkdir" command="mkdir" tooltip="create directory"/>
      <GitCommand name="touch" command="touch" tooltip="create file"/>
      <h2>Initialize Repo and Version Control</h2>
      <GitCommand name="git init" command="git init" tooltip="creates an empty Git repository - basically a .git directory with subdirectories for objects , refs/heads , refs/tags , and template files"/>
      <GitCommand name="git add ." command="git add ." tooltip="adds changes (including new files) in the working directory"/>
      <GitCommand name="git commit -m" command="git commit -m" tooltip="save your changes to the local repository; sets the commit's message."/>
      <GitCommand name="git push" command="git push" tooltip="upload local repository content to a remote repository"/>
      <GitCommand name="git pull" command="git pull" tooltip="download content from a remote repository"/>
      <GitCommand name="git clone <url to repository>" command="git clone" tooltip="Clones a repository into a newly created directory,"/>
      <GitCommand name="git checkout -b <branch name>" command="git checkout -b" tooltip="switch working changes to a new or existing branch"/>

      <h2>Delete and Others</h2>
      <GitCommand name="git rm --cached <file Name>" command="git rm --cached" tooltip="remove file from staging area"/>
      <GitCommand name="git rm <file Name>" command="git rm" tooltip="remove file from staging area and file system"/>
      <h2>Help!</h2>
      <GitCommand name="git status" command="git status" tooltip="displays the state of the working directory and the staging area, including whether you need to pull remote changes to our local repository"/>
      <GitCommand name="git reset HEAD~" command="git reset HEAD~" tooltip="undo previous commit"/>
      <GitCommand name="git reflog expire --expire-unreachable=now --all" command="git reflog expire --expire-unreachable=now --all" tooltip="removes all references of unreachable commits in reflog"/>
      <GitCommand name="git gc --prune=now" command="git gc --prune=now" tooltip="removes loose commits regardless of age"/>

      <footer id="footer-temporary">2020 Mark Ohanesian </footer>
      <a href="https://github.com/markohanesian?tab=repositories">Github</a>
    </div>
  );
}

export default App;
