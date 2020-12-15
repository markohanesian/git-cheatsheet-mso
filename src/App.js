import './App.css';
import GitCommand from './components/GitCommand';

function App() {
  return (
    <div className="App">
      <header>
        <code id="title">💻 Git Good 💪🏼</code>
        <p class="subtitle">Click commands below to copy to clipboard</p>
      </header>

      {/* LIST OF GIT COMMANDS */}
      <h2>General Use and Navigation</h2>
      <GitCommand name="pwd" command="pwd" />
      <GitCommand name="ls" command="ls" />
      <GitCommand name="cd" command="cd" />
      <GitCommand name="cd ~ (home directory)" command="cd ~" />
      <GitCommand name="cd .. (parent directory)" command="cd .." />
      <GitCommand name="mkdir" command="mkdir" />
      <GitCommand name="touch" command="touch" />
      <h2>Initialize Repo and Version Control</h2>
      <GitCommand name="git init" command="git init" />
      <GitCommand name="git add ." command="git add ." />
      <GitCommand name="git commit -m" command="git commit -m" />
      <GitCommand name="git push" command="git push" />
      <GitCommand name="git pull" command="git pull" />
      <GitCommand name="git clone <url to repository>" command="git clone" />
      <GitCommand name="git checkout -b <branch name>" command="git checkout -b" />

      <h2>Delete and Others</h2>
      <GitCommand name="git rm -r <file Name>" command="git rm -r" />
      <h2>Help!</h2>
      <GitCommand name="git status" command="git status" />
      <GitCommand name="git reset HEAD~" command="git reset HEAD~" />
      <GitCommand name="git gc --prune=now" command="git gc --prune=now" />

      <footer id="footer-temporary">2020 Mark Ohanesian </footer>
      <a href="https://github.com/markohanesian?tab=repositories">Github</a>
    </div>
  );
}

export default App;
