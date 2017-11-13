#include <iostream>
#include <string>
#include <filesystem>
#include <direct.h>

using namespace std;

string current_working_directory()
{
    char* cwd = _getcwd( 0, 0 ) ; // **** microsoft specific ****
    std::string working_directory(cwd) ;
    std::free(cwd) ;
    return working_directory ;
}

int main(){
  cout << "finding your mongoDB database folder.";
  cout << current_working_directory() << endl;
  string path = current_working_directory();
  string dataPath = "/data/db";
  string fullPath = string(path) + string(dataPath);
  string command = "mongod -dbpath ";
  std::string result = std::string(command) + std::string(fullPath);

  if (fullPath.find("/data/db")){
      cout << result << endl;
      cout << "Starting MongoDB" << endl;
      system(result.c_str());
  }
  else{
      cout << "No Database Found." << endl;
  }
  cin.get();
  return 0;
}
