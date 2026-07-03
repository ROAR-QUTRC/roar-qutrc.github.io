{ pkgs, lib, config, inputs, ... }:

{
  env.NO_MKDOCS_2_WARNING = 1;

  packages = with pkgs; [ 
      doxygen
      python313Packages.mkdocs-material
      python313Packages.mkdocs-material-extensions
      python313Packages.mkdocs-awesome-nav
   ] ++ python313Packages.mkdocs-material.optional-dependencies.imaging;

  languages = {
    python.enable = true;
    javascript = {
      enable = true;
      package = pkgs.nodejs_22;
      npm = {
        enable = true;
        install.enable = true;
      };
    };
  };

  scripts = {
    dev.exec = "mkdocs serve";
  };
}
