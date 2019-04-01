# Contributing

<a name="pull-requests"></a>

## Pull requests

Follow this process if you'd like your work considered for inclusion in the project:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes:

   ```bash
   git clone https://github.com/<your-username>/paramount
   cd paramount
   git remote add upstream https://github.com/WeTrustPlatform/paramount
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Install/update dependencies:

   ```bash
   yarn
   ```

4. Create a new topic branch (off the `master` branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
   with a clear title and description. If screenshot can be included, please attach one.

<a name="development"></a>

## Development

The development of components also happen on the documentation site

```bash
cd <root>
yarn dev
```

The development/docs will then be available at http://localhost:3000.

The site is created based on `*.mdx` files ([see MDX](https://github.com/mdx-js/mdx)) throughout the codebase which provides:

1. **Component's playground**. Test out usage of the components and their features

   ```
   <Playground>
     <Button appearance="minimal" color="default" title="Default" />
     <Button isDisabled color="primary" title="Disabled" />
   </Playground>
   ```

2. **Documentation**. Edit markdown for documentation of component features

   ```
   ## Section of component documentation

   You can just write documentation right next to the playground

   <Playground>
    ...
   </Playground>
   ```

3. **Tests**. Snapshots of components are taken directly from `<Playground />` which provide a good basis for [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) for UI tests

<a name="making-changes"></a>

## Making changes

There are two files required to each component. Let's say for `TextInput`

1. `TextInput.tsx` - The actual React Component
2. `TextInput.styles.ts` - The Component styling

<a name="running-tests"></a>

## Running Tests

You can run unit tests with like so:

```bash
yarn test
```

Because components are primarily tested against snapshots:

1. Make sure that your changes do not have unintended consequences
2. If you are confident in snapshot changes, update snapshots

   ```bash
     yarn test -u
   ```