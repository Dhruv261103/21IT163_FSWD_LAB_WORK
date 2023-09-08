#include <iostream>
using namespace std;
int n, flag = -1, cnt = 0, comparision = 0, divide = 0, conquer = 0;
int binarySearch(string arr[], int first, int last, string key)
{
    int mid;
    cnt++; // function call
    if (first <= last)
    {
        mid = ((first + last) / 2);
        cnt++; // mid
        comparision++;
        if (key.compare(arr[mid]) == 0)
        {
            flag = mid;
            cnt++; // flag
            cnt++; // return
            return flag;
        }
        comparision++;
        if (arr[mid] < key)
        {
            divide++;
            binarySearch(arr, mid + 1, last, key);
        }
        else if (arr[mid] > key)
        {
            divide++;
            binarySearch(arr, first, mid - 1, key);
        }
    }
    conquer++;
    cnt++; // return
    return flag;
}
int main()
{
    cnt++; // flag = -1
    cout << "Enter the size of array: ";
    cin >> n;
    int first = 0, last = (n - 1);
    int mid = 0;
    string arr[n], key;
    cout << "Enter your sorted array: ";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    cout << "Enter key value for search: ";
    cin >> key;
    cnt++; // first = 0
    cnt++; // last = n-1
    int result = binarySearch(arr, first, last, key);
    if (result != -1)
    {
        cout << "key found at index : " << result << endl;
    }
    else
    {
        cout << "No element found." << endl;
    }
    cout << "Total number of instruction are : " << cnt << endl;
    cout << "Total number of comparision are : " << comparision << endl;
    cout << "Total number of division occur : " << divide << endl;
    cout << "Total number of conquerare : " << conquer << endl;
}


