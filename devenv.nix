{ pkgs, ... }:

{
  env.NO_MKDOCS_2_WARNING = 1;

  packages = with pkgs; [
      python313Packages.mkdocs-material
      python313Packages.mkdocs-material-extensions
      python313Packages.mkdocs-awesome-nav
   ] ++ python313Packages.mkdocs-material.optional-dependencies.imaging;

  languages = {
    python.enable = true;
  };

  scripts = {
    dev.exec = "mkdocs serve";
    build.exec = "mkdocs build";
  };
}
