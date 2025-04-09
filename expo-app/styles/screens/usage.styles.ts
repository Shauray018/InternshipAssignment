import { StyleSheet } from 'react-native';

export const usageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  statsCard: {
    marginBottom: 16,
    padding: 16,  
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  statsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F5F3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111827',
  },
  statusContainer: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  costContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  costLabel: {
    fontSize: 16,
    color: '#4B5563',
  },
  costValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  statsButton: {
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#F5F3FF',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth:1,
    borderColor:"#E9EAEB"
  },
  statsButtonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsButtonIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  statsButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  activeStatus: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#039855',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,
  },
  activeText: {
    color: '#039855',
    fontWeight: '500',
    fontSize: 14,
  },
});
