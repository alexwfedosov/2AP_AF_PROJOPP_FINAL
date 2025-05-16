#include <iostream>
#include <string>
#include <vector>
using namespace std;



// A simple structure to hold user info (username and email)
struct User {
    string username;
    string email;
};
// A list where we "store" users temporarily
vector<User> users;
// Check if the username already exists in the list
bool isUsernameTaken(const string& username) {
    for (const auto& user : users) {
        if (user.username == username) {
            return true;  // Username is taken
        }
    }
    return false;  // Username is free
}
// Simple email check (just checks if there's an '@' in it)
bool isValidEmail(const string& email) {
    return email.find('@') != string::npos;  // Looks for '@' symbol
}
// Main function to register a user
void registerUser() {
    string username, email;
    // Ask the user for a username
    cout << "Enter your username: ";
    cin >> username;
    // Check if the username is already taken
    if (isUsernameTaken(username)) {
        cout << "Sorry, this username is already taken. Try another one.\n";
        return;  // Exit the function if the username is taken
    }
    // Ask for the email
    cout << "Enter your email: ";
    cin >> email;
    // Check if the email is valid (basic check)
    if (!isValidEmail(email)) {
        cout << "Oops, that doesn't look like a valid email. Try again!\n";
        return;  // Exit if email is invalid
    }
    // If everything looks good, add the user to the list
    users.push_back({username, email});
    cout << "You are registered, " << username << "!\n";  // Success message
}
int main() {
    // Call the registerUser function to start the registration process
    registerUser();
    return 0;
}